package com.service;

import com.domain.FileInfo;
import com.domain.Restaurant;
import com.mapper.RestaurantMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {
	
	@Autowired
	private RestaurantMapper mapper;

	@Override
	public ArrayList<Restaurant> list() {

		ArrayList<Restaurant> restaurants = null;
		try {
			restaurants = mapper.list();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return restaurants;
	}

	@Override
	public List<String> restaurantMenuList(Integer refNo) throws Exception {
		return mapper.restaurantMenuList(refNo);
	}

	@Override
	public List<FileInfo> restaurantFileList(Integer refNo) throws Exception {
		return mapper.restaurantFileList(refNo);
	}

	@Override
	public FileInfo restaurantReadFile(Integer refNo) throws Exception {
		return mapper.restaurantReadFile(refNo);
	}

}
