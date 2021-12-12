package com.service;

import com.domain.FileInfo;
import com.domain.Restaurant;
import com.domain.User;

import java.util.ArrayList;
import java.util.List;

public interface RestaurantService {

	public ArrayList<Restaurant> list();

	public List<FileInfo> restaurantFileList(Integer refNo) throws Exception;

	public FileInfo restaurantReadFile(Integer refNo) throws Exception;

    List<String> restaurantMenuList(Integer id) throws Exception;
}
