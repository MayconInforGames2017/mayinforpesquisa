package com.mayinfor.mayinforpesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mayinfor.mayinforpesquisa.entities.Record;

public interface RecordRepository extends JpaRepository<Record, Long>{

}
