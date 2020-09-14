package com.mayinfor.mayinforpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mayinfor.mayinforpesquisa.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}
