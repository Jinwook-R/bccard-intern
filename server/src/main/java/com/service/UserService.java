package com.service;

import com.domain.User;

public interface UserService {

	public void save(User user);

	public User getByCredentials(String id, String password);

//	public Boolean existsByEmail(String email) throws Exception;

//	public User findByEmailAndPassword(String email, String password) throws Exception;
}
