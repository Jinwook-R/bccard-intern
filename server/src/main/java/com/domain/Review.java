package com.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Review {
	private int id;
	private String title;
	private Integer starpoint;
	private String content;
	private String user_id;
	private String restaurant_id;
}
