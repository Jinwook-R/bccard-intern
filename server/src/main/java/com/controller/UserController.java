package com.controller;

import com.domain.Board;
import com.domain.User;

import com.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Slf4j
@Controller
@RequestMapping("/auth")
public class UserController {
	
	@Autowired
	private UserService userService;

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(User user){

		User responseUser = null;
		try{
			responseUser = User.builder()
					.email("")
					.id("")
					.username("")
					.build();


		}catch(Exception e){

		}

		return ResponseEntity.ok().body(responseUser);
	}

	@GetMapping("/insert")
	public void insertForm(Model model, Board board) {

	}

}


