package com.mapper;

import com.domain.FileInfo;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface FileMapper {
    public void uploadFile(FileInfo fileInfo) throws Exception;
    public List<FileInfo> fileList(Integer refNo) throws Exception;
    public FileInfo readFile(Integer fileNo) throws Exception;
    public void deleteFile(Integer fileNo) throws Exception;
}
