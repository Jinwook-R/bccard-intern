package com.domain;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class User {
    private String token;
    private String id;
    private String username;
    private String email;
    private String password;
    private int age;
    private String department;
    private String nickname;
    private String rank_type;
}
