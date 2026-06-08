package com.amruiux.platform.repository;

import com.amruiux.platform.entity.UserSession;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserSessionRepository extends JpaRepository<UserSession, UUID> {

    Optional<UserSession> findByRefreshToken(String refreshToken);

    void deleteByUserId(UUID userId);

    void deleteByRefreshToken(String refreshToken);
}
