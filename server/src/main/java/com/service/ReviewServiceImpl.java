package com.service;

import java.util.List;

import com.domain.FileInfo;
import com.domain.Review;
import com.utils.FileUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.mapper.ReviewMapper;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	private ReviewMapper mapper;

	@Autowired
	private FileUtils fileUtils;

	@Value("${upload.path}")
	private String uploadPath;

	@Override
	public List<Review> list() throws Exception {
		return mapper.list();
	}
	
	@Override
	public Review read(Integer boardNo) throws Exception {
		return mapper.read(boardNo);
	}

	@Override
	public Integer insert(Review review) throws Exception {

		Integer reviewOne = mapper.readOne();

		if(reviewOne == null) {
			review.setId(1);
		}else {
			review.setId(reviewOne+1);
		}
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

	@Override
	public List<Review> userReview(String userId) throws Exception {
		return mapper.userReview(userId);
	}

	@Override
	public int insertFile(Review review) {
//		return mapper.userReview(userId);
		return 0;
	}

	public void fileUpload(Review board) throws Exception {

//		MultipartFile[] files = board.getFile();
//
//		List<FileInfo> fileList = fileUtils.uploadFiles(files, uploadPath);
//
//		for(FileInfo fileInfo : fileList) {
//			int boardNo = board.getBoardNo();
//			fileInfo.setRefNo(boardNo);
//			mapper.uploadFile(fileInfo);
//		}
	}

}
