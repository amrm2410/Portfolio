package com.amruiux.platform.dto;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@Builder
public class ErrorResponse {
    private int status;
    private String error;
    private String message;
    @Builder.Default
    private Instant timestamp = Instant.now();
}
