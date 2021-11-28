package com.service;

import java.util.*;

import com.domain.Board;

public interface BoardService {

	public List<Board> list() throws Exception;

	public int insert(Board board) throws Exception;

	public Board read(Integer boardNo) throws Exception;

	public int update(Board board) throws Exception;

	public int delete(Integer boardNo) throws Exception;

	public List<Board> list(String keyword) throws Exception;
}
