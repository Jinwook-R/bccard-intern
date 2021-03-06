package com.service;

import java.util.*;

import com.domain.Review;

public interface ReviewService {

	public List<Review> list() throws Exception;

	public Integer insert(Review review) throws Exception;

	public Review read(Integer boardNo) throws Exception;

	public int update(Review review) throws Exception;

	public int delete(Integer boardNo) throws Exception;

	public List<Review> list(String keyword) throws Exception;

	public List<Review> userReview(String userId) throws Exception;

    int insertFile(Review review);
}
