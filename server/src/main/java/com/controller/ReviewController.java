package com.controller;

import com.domain.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import com.domain.Review;
import com.service.ReviewService;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/review")
public class ReviewController {
	
	@Autowired
	private ReviewService service;

	@GetMapping("/list")
	public void list(Model model, String keyword) throws Exception {
	//		List<Board> list = service.list(keyword);
	//		model.addAttribute("list", list);
	}

	@PostMapping("/insert")
	public ResponseEntity<?> insert(@RequestBody Review review) throws Exception {

		int result = service.insert(review);
		String msg = "";
		
		if (result > 0 ) {
			msg = "리뷰 등록이 완료되었습니다.";
		} else {
			msg = "리뷰가 등록되지 않았습니다.";
		}
		
		return ResponseEntity.ok().body(msg);
	}

	@GetMapping("/read")
	public void read(Model model, @RequestParam("boardNo") Integer boardNo) throws Exception {
		Review review = service.read(boardNo);
		model.addAttribute("board", review);
	}

	@PostMapping("/update")
	public String update(Model model, Review review) throws Exception {
		int result = service.update(review);
		String msg = "";
		
		if(result > 0 ) {
			msg = "수정이 완료되었습니다.";
		}else{
			msg = "데이터가 수정되지 않았습니다.";
		}

		model.addAttribute("msg", msg);
		
		return "board/success";
	}

	@PostMapping("/delete")
	public String delete(Model model, Integer boardNo) throws Exception{
		int result = service.delete(boardNo);
		String msg = "";
		
		if(result > 0 ) {
			msg = "삭제가 완료되었습니다.";
		}else {
			msg = "데이터가 삭제되지 않았습니다.";
		}
		model.addAttribute("msg", msg);
		return "board/success";
	}
}


