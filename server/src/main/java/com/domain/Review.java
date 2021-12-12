package com.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Review {
	private int id;
	private int starpoint;
	private String content;
	private String userId;
	private String restaurantId;
	private MultipartFile[] file;
}
