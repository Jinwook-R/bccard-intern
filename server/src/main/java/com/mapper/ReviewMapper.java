package com.mapper;

import java.util.List;

import com.domain.FileInfo;
import com.domain.Review;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ReviewMapper {

	public List<Review> list() throws Exception;

	public Review read(Integer boardNo) throws Exception;

	public int insert(Review review) throws Exception;

	public int update(Review review) throws Exception;

	public int delete(Integer boardNo) throws Exception;

	public List<Review> search(String keyword) throws Exception;

	public void uploadFile(FileInfo fileInfo) throws Exception;

    public Integer readOne() throws Exception;

    List<Review> userReview(String userId);
}
