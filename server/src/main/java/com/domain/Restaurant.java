package com.domain;
import lombok.Builder;
import lombok.Data;


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
