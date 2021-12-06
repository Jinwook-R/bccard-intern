package com.service;

import com.domain.Restaurant;
import com.mapper.RestaurantMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class RestaurantServiceImpl implements RestaurantService {
	
	@Autowired
	private RestaurantMapper mapper;

	@Override
	public ArrayList<Restaurant> list() {

		ArrayList<Restaurant> restaurants = null;

		try {
			restaurants =  mapper.list();
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}

		return restaurants;

	}


}
