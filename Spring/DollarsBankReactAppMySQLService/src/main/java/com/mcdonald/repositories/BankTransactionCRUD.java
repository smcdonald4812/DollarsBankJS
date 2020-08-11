package com.mcdonald.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mcdonald.models.Transaction;

@Repository
public interface BankTransactionCRUD extends JpaRepository<Transaction, Integer> {
	@Query(value="SELECT * FROM transaction WHERE customerTransactionId=? AND type=? ORDER BY id desc", nativeQuery=true)
	public List<Transaction> getAllById(int id, String type);
}
