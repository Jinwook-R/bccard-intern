package com.controller;

import com.domain.FileInfo;
import com.domain.Response;
import com.domain.Restaurant;
import com.domain.User;
import com.security.TokenProvider;
import com.service.FileService;
import com.service.RestaurantService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Controller
@RequestMapping("/restaurant")
public class RestaurantController {
	
	@Autowired
	private RestaurantService restaurantService;

	@GetMapping("/list")
	public ResponseEntity<?> restaurantList() throws Exception {

		ArrayList<Restaurant> responseRestaurant = new ArrayList<>();

		try {
			responseRestaurant = restaurantService.list();
		} catch(Exception e) {
			log.info(e.getMessage());
		}

		for(int i = 0 ; i < responseRestaurant.size() ; i++){
			Restaurant now = responseRestaurant.get(i);
			now.setFileInfoList(restaurantService.restaurantFileList(now.getId()));
			responseRestaurant.set(i, now);
		}

		return ResponseEntity.ok().body(responseRestaurant);
	}
}