package com.mapper;

import com.domain.User;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface UserMapper {

	public User findById(String id);
	public User findByIdAndPassword(String id, String password);
	public void save(User user);
}
