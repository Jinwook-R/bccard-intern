package com.service;

import com.domain.FileInfo;
import com.domain.Restaurant;
import com.domain.User;

import java.util.ArrayList;
import java.util.List;

public interface RestaurantService {

	public ArrayList<Restaurant> list();

	public List<FileInfo> restaurantFileList(String refNo) throws Exception;

}
