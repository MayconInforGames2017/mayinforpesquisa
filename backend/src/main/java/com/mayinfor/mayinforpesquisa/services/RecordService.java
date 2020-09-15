package com.mayinfor.mayinforpesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mayinfor.mayinforpesquisa.dto.RecordDTO;
import com.mayinfor.mayinforpesquisa.dto.RecordInsertDTO;
import com.mayinfor.mayinforpesquisa.entities.Game;
import com.mayinfor.mayinforpesquisa.entities.Record;
import com.mayinfor.mayinforpesquisa.repositories.GameRepository;
import com.mayinfor.mayinforpesquisa.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository recordRepository;

	@Autowired
	private GameRepository gameRepository;

	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());

		Game game = gameRepository.getOne(dto.getGameId());
		entity.setGame(game);

		entity = recordRepository.save(entity);

		return new RecordDTO(entity);
	}

}
