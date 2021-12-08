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
	public void save(User user) {

		if(user == null || user.getId() == null || user.getPassword() == null || user.getDepartment() == null || user.getRank_type() == null){
			throw new RuntimeException("Invalid arguments");
		}

		final String id = user.getId();

		if(userMapper.findById(id) != null){
			throw new RuntimeException("ID already exists");
		}
		userMapper.save(user);
	}

	@Override
	public User getByCredentials(String id, String password) {
		return userMapper.findByIdAndPassword(id, password);
	}
}
