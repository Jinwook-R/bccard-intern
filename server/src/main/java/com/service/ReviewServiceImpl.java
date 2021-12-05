package com.service;

import java.util.List;
import com.domain.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mapper.ReviewMapper;

@Service
public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	private ReviewMapper mapper;
	
	@Override
	public List<Review> list() throws Exception {
		return mapper.list();
	}
	
	@Override
	public Review read(Integer boardNo) throws Exception {
		return mapper.read(boardNo);
	}

	@Override
	public int insert(Review review) throws Exception {
		return mapper.insert(review);
	}

	@Override
	public int update(Review review) throws Exception {
		return mapper.update(review);
	}

	@Override
	public int delete(Integer boardNo) throws Exception {
		return mapper.delete(boardNo);
	}

	@Override
	public List<Review> list(String keyword) throws Exception {
		
		keyword = keyword == null ? "" : keyword;
		
		return mapper.search(keyword);
	}

}
