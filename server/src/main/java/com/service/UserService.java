package com.service;

import com.domain.User;

public interface UserService {

	public User save(final User user);

	public User getByCredentials(String email, String password);

//	public Boolean existsByEmail(String email) throws Exception;
//
//	public User findByEmailAndPassword(String email, String password) throws Exception;

}