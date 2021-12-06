package com.service;

import com.domain.FileInfo;
import com.domain.Restaurant;
import com.mapper.FileMapper;
import com.mapper.RestaurantMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FileServiceImpl implements FileService {
	
	@Autowired
	private FileMapper mapper;

	@Override
	public List<FileInfo> fileList(String refNo) {
		return null;
	}

	@Override
	public FileInfo readFile(Integer fileNo) throws Exception {
		return mapper.readFile(fileNo);
	}

	@Override
	public void deleteFile(Integer fileNo) throws Exception {

	}

	// 파일 업로드
	//	public void fileUpload(Board board) throws Exception {
	//
	//		MultipartFile[] files = board.getFile();
	//
	//		// 파일 업로드
	//		List<FileInfo> fileList = fileUtils.uploadFiles(files, uploadPath);
	//
	//		for(FileInfo fileInfo : fileList) {
	//			int boardNo = board.getBoardNo();
	//			fileInfo.setRefNo(boardNo);
	//			mapper.uploadFile(fileInfo);
	//		}
	//
	//
	//	}

}
