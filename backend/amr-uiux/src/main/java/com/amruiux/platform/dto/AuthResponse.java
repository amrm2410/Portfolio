package com.amruiux.platform.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {
    private String accessToken;
    private long expiresIn;
    private UserProfileResponse user;
}
