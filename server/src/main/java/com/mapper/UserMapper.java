package com.mapper;

import com.domain.User;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface UserMapper {

	public User findByEmail(String email);
	public User findByEmailAndPassword(String email, String password);
	public User save(User user);
}
