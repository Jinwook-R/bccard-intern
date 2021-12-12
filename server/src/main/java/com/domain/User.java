package com.domain;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class User {
    private String token;
    private String id;
    private String password;
    private String username;
    private String department;
    private String rankType;
    private String userType;
}
