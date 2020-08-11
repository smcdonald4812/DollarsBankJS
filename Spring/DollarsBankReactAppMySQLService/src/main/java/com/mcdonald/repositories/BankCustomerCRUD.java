package com.mcdonald.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mcdonald.models.Customer;

public interface BankCustomerCRUD extends JpaRepository<Customer, Integer> {
	public Customer findByUsername(String username);
}
