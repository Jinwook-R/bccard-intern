package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.domain.Review;
import com.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Slf4j
@Controller
@RequestMapping("/review")
public class ReviewController {
	
	@Autowired
	private ReviewService service;

	@GetMapping("/list")
	public void list(String keyword) throws Exception {
			List<Review> list = service.list(keyword);
			System.out.println(list);
	}

	@GetMapping("/userReview")
	public ResponseEntity<?> userReview(String userId) throws Exception {
		List<Review> list = service.list(userId);
		return null;
	}
	
	
	
	@PostMapping("/insert")
	public ResponseEntity<?> insert(@RequestBody Review review) throws Exception {

		System.out.println(review);
		log.info("review/info", review);

		int result = service.insert(review);
		String msg = "";

		if (result > 0 ) {
			msg = "리뷰 등록이 완료되었습니다.";
		} else {
			msg = "리뷰가 등록되지 않았습니다.";
		}

		System.out.println(msg);

		return ResponseEntity.ok().body(msg);
	}



	@PostMapping(path = "/insertFile", consumes = {"multipart/form-data"})
	public ResponseEntity<?> insertFile(@RequestParam(value="file") MultipartFile[] file) throws Exception {
		String msg = "";
		System.out.println(file+"!!!!!!!!!!!!!");
		try {
			// service.insertFile(file)
			int result = 0;
			if (result > 0) {
				msg = "리뷰 등록이 완료되었습니다.";
			} else {
				msg = "리뷰가 등록되지 않았습니다.";
			}
		}catch (Exception e){

		}

		return new ResponseEntity<>("Success", HttpStatus.OK);

	}


	@GetMapping("/read")
	public void read(Model model, @RequestParam("boardNo") Integer boardNo) throws Exception {
		Review review = service.read(boardNo);
		model.addAttribute("board", review);
	}
}


