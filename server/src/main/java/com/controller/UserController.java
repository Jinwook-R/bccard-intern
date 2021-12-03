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
	public ResponseEntity<?> registerUser(@RequestBody User user){
		User responseUser = null;
		try {
			responseUser = userService.save(user);
		} catch(Exception e) {
			log.info(e.getMessage());
		}
		return ResponseEntity.ok().body(responseUser);
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticate(@RequestBody User user) {

		log.info("user",user);

		User nowUser = userService.getByCredentials(
				user.getEmail(),
				user.getPassword()
		);

		if(nowUser != null){
			final String token = tokenProvider.create(nowUser);
			final User responseUser = User.builder()
					.email(nowUser.getEmail())
					.username(nowUser.getUsername())
					.token(token)
					.age(nowUser.getAge())
					.department(nowUser.getDepartment())
					.nickname(nowUser.getNickname())
					.rank(nowUser.getRank())
					.build();
			return ResponseEntity.ok().body(responseUser);
		} else {
			Response response = Response.builder().error("이메일이나 비밀번호를 확인해주세요....").build();

			return ResponseEntity.badRequest().body(response);
		}

	}
}