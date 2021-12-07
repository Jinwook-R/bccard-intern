package com.domain;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Restaurant {

    private Integer id;
    private String name;
    private String lat;
    private String lng;
    private String type;
    private List<FileInfo> fileInfoList;
}
