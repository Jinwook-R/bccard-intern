package com.domain;
import lombok.Builder;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;


@Data
@Builder
public class Restaurant {
    private String id;
    private String name;
    private String url;
    private String lat;
    private String lng;
    private String type;
}
