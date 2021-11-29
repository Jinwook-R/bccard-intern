package com.service;

import com.domain.User;

import java.util.List;

public interface UserService {

	public User create(final User user) throws Exception;

	public User findByEmail(String email) throws Exception;

	public Boolean existsByEmail(String email) throws Exception;

	public User findByEmailAndPassword(String email, String password) throws Exception;

}
