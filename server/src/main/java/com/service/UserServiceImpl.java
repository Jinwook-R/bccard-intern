package com.service;

import com.domain.User;
import com.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;

	@Override
	public User save(User user) {

		if(user == null || user.getEmail() == null){
			throw new RuntimeException("Invalid arguments");
		}

		final String email = user.getEmail();

		if(userMapper.findByEmail(email) != null){
			throw new RuntimeException("Email already exists");
		}
		return userMapper.save(user);
	}

	@Override
	public User getByCredentials(String email, String password) {
		return userMapper.findByEmailAndPassword(email, password);
	}

//	@Override
//	public User findByEmail(String email) throws Exception {
//		return null;
//	}
//
//	@Override
//	public Boolean existsByEmail(String email) throws Exception {
//		return null;
//	}
//
//	@Override
//	public User findByEmailAndPassword(String email, String password) throws Exception {
//		return null;
//	}
}
