package com.service;

import com.domain.FileInfo;
import com.domain.Restaurant;

import java.util.ArrayList;
import java.util.List;

public interface FileService {

	//파일 목록
	public List<FileInfo> fileList(String refNo) throws Exception;

	//파일 읽기
	public FileInfo readFile(Integer fileNo) throws Exception;

	//파일 삭제
	public void deleteFile (Integer fileNo) throws Exception;
}
