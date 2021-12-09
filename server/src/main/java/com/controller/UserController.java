package com.controller;

import com.domain.Response;
import com.domain.User;

import com.security.TokenProvider;
import com.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/auth")
public class UserController {
	
	@Autowired
	private UserService userService;

	@Autowired
	private TokenProvider tokenProvider;

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		User responseUser = null;
		try {
			userService.save(user);
			return ResponseEntity.ok().body(responseUser);
		} catch(Exception e) {
			log.info(e.getMessage());
			Response response = Response.builder().error("회원가입에 실패하였습니다.").build();
			return ResponseEntity.badRequest().body(response);
		}
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticate(@RequestBody User user) {
		User nowUser = userService.getByCredentials(
				user.getId(),
				user.getPassword()
		);

		if(nowUser != null) {
			final String token = tokenProvider.create(nowUser);
			final User responseUser = User.builder()
					.token(token)
					.id(nowUser.getId())
					.username(nowUser.getUsername())
					.department(nowUser.getDepartment())
					.rank_type(nowUser.getRank_type())
					.user_type(nowUser.getUser_type())
					.build();
			return ResponseEntity.ok().body(responseUser);
		} else {
			Response response = Response.builder().error("이메일이나 비밀번호를 확인해주세요....").build();
			return ResponseEntity.badRequest().body(response);
		}
	}
}