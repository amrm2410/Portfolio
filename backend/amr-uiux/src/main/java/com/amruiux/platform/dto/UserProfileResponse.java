package com.amruiux.platform.dto;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.Map;
import java.util.UUID;

@Data
@Builder
public class UserProfileResponse {
    private UUID id;
    private String email;
    private String username;
    private String role;
    private String avatarUrl;
    private String bio;
    private Map<String, String> socialLinks;
    private Instant createdAt;
}
