package com.amruiux.platform.dto;

import lombok.Data;

@Data
public class GoogleAuthRequest {
    private String googleToken;
    private String email;
    private String name;
    private String avatarUrl;
}
