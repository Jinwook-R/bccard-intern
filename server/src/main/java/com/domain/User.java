package com.domain;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class User {
    private String token;
    private String id;
    private String password;
    private String username;
    private String department;
    private String rank_type;
}
