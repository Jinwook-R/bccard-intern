package com.mapper;

import com.domain.FileInfo;
import com.domain.Restaurant;
import org.apache.ibatis.annotations.Mapper;
import java.util.ArrayList;
import java.util.List;

@Mapper
public interface RestaurantMapper {
	public ArrayList<Restaurant> list() throws Exception;
	List<FileInfo> restaurantFileList(String refNo);
}
