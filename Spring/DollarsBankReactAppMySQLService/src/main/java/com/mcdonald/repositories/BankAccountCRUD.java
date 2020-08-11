package com.mcdonald.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mcdonald.models.Accounts;

@Repository
public interface BankAccountCRUD extends JpaRepository<Accounts, Integer> {
	@Query(value="SELECT * FROM accounts WHERE customerId=? AND type=?", nativeQuery=true)
	public Accounts findByIdAndType(int id, String type);
}
