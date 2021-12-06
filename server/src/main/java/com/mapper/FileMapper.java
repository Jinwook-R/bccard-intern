package com.mapper;

import com.domain.FileInfo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FileMapper {
    // 파일 업로드
    public void uploadFile(FileInfo fileInfo) throws Exception;

    // 파일 목록
    public List<FileInfo> fileList(Integer refNo) throws Exception;

    // 파일 읽기
    public FileInfo readFile(Integer fileNo) throws Exception;

    public void deleteFile(Integer fileNo) throws Exception;
}
