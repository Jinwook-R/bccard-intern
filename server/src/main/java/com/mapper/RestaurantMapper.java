package com.mapper;

import com.domain.Restaurant;
import com.domain.Review;
import com.domain.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;


@Mapper
public interface RestaurantMapper {
	public ArrayList<Restaurant> list() throws Exception;

}
