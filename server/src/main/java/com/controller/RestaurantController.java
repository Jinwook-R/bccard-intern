package com.controller;

import com.domain.FileInfo;
import com.domain.Response;
import com.domain.Restaurant;
import com.domain.User;
import com.security.TokenProvider;
import com.service.FileService;
import com.service.RestaurantService;
import com.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Controller
@RequestMapping("/restaurant")
public class RestaurantController {
	
	@Autowired
	private RestaurantService restaurantService;

	@Autowired
	private FileService fileService;

	@GetMapping("/list")
	public ResponseEntity<?> restaurantList() throws Exception {

		ArrayList<Restaurant> responseRestaurant = new ArrayList<>();

		try {
			responseRestaurant = restaurantService.list();
		} catch(Exception e) {
			log.info(e.getMessage());
		}

		List<FileInfo> fileList = null;

		for(Restaurant e : responseRestaurant) {
			fileList =  restaurantService.restaurantFileList(e.getId());
			System.out.println(fileList);

		}



		return ResponseEntity.ok().body(responseRestaurant);
	}
}