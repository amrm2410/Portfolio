package com.amruiux.platform.service;

import com.amruiux.platform.dto.*;
import com.amruiux.platform.entity.Role;
import com.amruiux.platform.entity.User;
import com.amruiux.platform.entity.UserSession;
import com.amruiux.platform.repository.UserRepository;
import com.amruiux.platform.repository.UserSessionRepository;
import com.amruiux.platform.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.time.Instant;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final UserSessionRepository sessionRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Transactional
    public AuthResult register(RegisterRequest request, String ipAddress, String deviceInfo) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ConflictException("Email already taken");
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new ConflictException("Username already taken");
        }

        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .username(request.getUsername())
                .role(Role.USER)
                .enabled(true)
                .build();
        userRepository.save(user);

        return createSession(user, ipAddress, deviceInfo);
    }

    @Transactional
    public AuthResult login(LoginRequest request, String ipAddress, String deviceInfo) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new AuthException("Invalid credentials"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new AuthException("Invalid credentials");
        }

        if (!user.isEnabled()) {
            throw new AuthException("Account is disabled");
        }

        return createSession(user, ipAddress, deviceInfo);
    }

    @Transactional
    public AuthResult refresh(String refreshToken) {
        if (refreshToken == null || refreshToken.isBlank()) {
            throw new AuthException("Refresh token is required");
        }

        UserSession session = sessionRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new AuthException("Invalid refresh token"));

        if (session.getExpiresAt().isBefore(Instant.now())) {
            sessionRepository.delete(session);
            throw new AuthException("Refresh token expired");
        }

        User user = session.getUser();

        // Token rotation: delete old, create new
        sessionRepository.delete(session);

        return createSession(user, session.getIpAddress(), session.getDeviceInfo());
    }

    @Transactional
    public void logout(String refreshToken) {
        if (refreshToken != null && !refreshToken.isBlank()) {
            sessionRepository.findByRefreshToken(refreshToken)
                    .ifPresent(sessionRepository::delete);
        }
    }

    @Transactional(readOnly = true)
    public UserProfileResponse getMe(UUID userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new AuthException("User not found"));
        return toProfile(user);
    }

    // ── Google OAuth ──

    @Transactional
    @SuppressWarnings("unchecked")
    public AuthResult googleAuth(GoogleAuthRequest request, String ipAddress, String deviceInfo) {
        String url = "https://oauth2.googleapis.com/tokeninfo?id_token=" + request.getGoogleToken();
        RestTemplate rest = new RestTemplate();
        Map<String, Object> tokenInfo;
        try {
            tokenInfo = rest.getForObject(url, Map.class);
        } catch (Exception e) {
            throw new AuthException("Invalid Google token");
        }

        if (tokenInfo == null || !request.getEmail().equals(tokenInfo.get("email"))) {
            throw new AuthException("Token email mismatch");
        }

        User user = userRepository.findByEmail(request.getEmail())
            .orElseGet(() -> {
                User newUser = User.builder()
                    .email(request.getEmail())
                    .avatarUrl(request.getAvatarUrl())
                    .username(generateUsername(request.getEmail()))
                    .role(Role.USER)
                    .enabled(true)
                    .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                    .build();
                return userRepository.save(newUser);
            });

        return createSession(user, ipAddress, deviceInfo);
    }

    private String generateUsername(String email) {
        String base = email.split("@")[0].replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String candidate = base + (int) (Math.random() * 9000 + 1000);
        while (userRepository.existsByUsername(candidate)) {
            candidate = base + (int) (Math.random() * 9000 + 1000);
        }
        return candidate;
    }

    // ── helpers ──

    private AuthResult createSession(User user, String ipAddress, String deviceInfo) {
        String accessToken = jwtUtil.generateAccessToken(user.getId(), user.getEmail(), user.getRole().name());
        String refreshToken = jwtUtil.generateRefreshToken(user.getId());

        UserSession session = UserSession.builder()
                .user(user)
                .refreshToken(refreshToken)
                .ipAddress(ipAddress)
                .deviceInfo(deviceInfo)
                .expiresAt(Instant.now().plusMillis(jwtUtil.getRefreshExpirationMs()))
                .build();
        sessionRepository.save(session);

        AuthResponse authResponse = AuthResponse.builder()
                .accessToken(accessToken)
                .expiresIn(jwtUtil.getAccessExpirationSeconds())
                .user(toProfile(user))
                .build();

        return new AuthResult(authResponse, refreshToken);
    }

    private UserProfileResponse toProfile(User user) {
        return UserProfileResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .role(user.getRole().name())
                .avatarUrl(user.getAvatarUrl())
                .bio(user.getBio())
                .socialLinks(user.getSocialLinks())
                .createdAt(user.getCreatedAt())
                .build();
    }

    // ── result wrapper (carries refresh token separately for cookie) ──

    public record AuthResult(AuthResponse response, String refreshToken) {}

    // ── exceptions ──

    public static class ConflictException extends RuntimeException {
        public ConflictException(String message) { super(message); }
    }

    public static class AuthException extends RuntimeException {
        public AuthException(String message) { super(message); }
    }
}
