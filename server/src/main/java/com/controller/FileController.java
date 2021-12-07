package com.controller;

import com.domain.FileInfo;
import com.service.FileService;
import com.service.RestaurantService;
import com.utils.FileUtils;
import com.utils.MediaUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.apache.commons.io.IOUtils;

import java.io.FileInputStream;

@Slf4j
@Controller
@RequestMapping("/file")
public class FileController {

    @Autowired
    private FileService service;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private FileUtils fileUtils;

    @ResponseBody
    @GetMapping(value = "/restaurant/img", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<byte[]> displayFile(Integer fileNo) throws Exception {

        FileInputStream fis = null;
        ResponseEntity<byte[]> entity = null;
        FileInfo fileInfo = restaurantService.restaurantReadFile(fileNo);
        String fullName = fileInfo.getFullName();
        String fileName = fileInfo.getFileName();

        try {
            String formatName = fullName.substring(fullName.lastIndexOf(".") + 1);
            MediaType mType = MediaUtils.getMediaType(formatName);
            HttpHeaders headers = new HttpHeaders();
            fis = new FileInputStream(fullName);

            if(mType != null) {
                headers.setContentType(mType);
            } else {
                headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
                headers.add("Content-Disposition", "attachment; filename=\"" + new String(fileName.getBytes()));
            }
            entity = new ResponseEntity<byte[]>(IOUtils.toByteArray(fis), headers, HttpStatus.CREATED);
        } catch (Exception e){
            e.printStackTrace();
        } finally {
            fis.close();
        }
        return entity;
    }

}
