package com.mapper;

import com.domain.User;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface UserMapper {

	public User findByEmail(String email);
	public Boolean existsByEmail(String email)  throws Exception;
	public User findByEmailAndPassword(String email, String password)  throws Exception;
	public User save(User user);
}
