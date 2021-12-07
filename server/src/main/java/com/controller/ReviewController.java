package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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
//		System.out.println("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	}

	@PostMapping("/insert")
	public String insert(Model model, Review review) throws Exception {
		
		int result = service.insert(review);
		String msg = "";
		
		if(result > 0 )
			msg = "등록이 완료되었습니다.";
		else
			msg ="데이터가 등록되지 않았습니다.";

		model.addAttribute("msg", msg);
		
		return "board/success";
	}

	@GetMapping("/read")
	public void read(Model model, @RequestParam("boardNo") Integer boardNo) throws Exception{
		Review review = service.read(boardNo);
		
		model.addAttribute("board", review);
	}

	@GetMapping("/update")
	public void updateForm(Model model, @RequestParam("boardNo") Integer boardNo) throws Exception{

		Review review = service.read(boardNo);

		model.addAttribute("board", review);
	}	

	@PostMapping("/update")
	public String update(Model model, Review review) throws Exception{
		
		int result = service.update(review);
		String msg = "";
		
		
		if(result > 0 )
			msg = "수정이 완료되었습니다.";
		else
			msg ="데이터가 수정되지 않았습니다.";
		
		
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


