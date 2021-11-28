package com.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.domain.Board;

@Mapper
public interface BoardMapper {

	public List<Board> list() throws Exception;

	public Board read(Integer boardNo) throws Exception;

	public int insert(Board board) throws Exception;

	public int update(Board board) throws Exception;

	public int delete(Integer boardNo) throws Exception;

	public List<Board> search(String keyword) throws Exception;

}
