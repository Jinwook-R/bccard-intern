package com.controller;

import com.domain.Response;
import com.domain.User;

import com.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/auth")
public class UserController {
	
	@Autowired
	private UserService userService;

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

			final User responseUser = User.builder()
					.id(nowUser.getId())
					.username(nowUser.getUsername())
					.department(nowUser.getDepartment())
					.rankType(nowUser.getRankType())
					.userType(nowUser.getUserType())
					.build();
			return ResponseEntity.ok().body(responseUser);
		} else {
			Response response = Response.builder().error("이메일이나 비밀번호를 확인해주세요....").build();
			return ResponseEntity.badRequest().body(response);
		}
	}
}