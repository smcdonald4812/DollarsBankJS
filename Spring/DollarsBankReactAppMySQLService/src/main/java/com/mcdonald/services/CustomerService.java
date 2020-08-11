package com.mcdonald.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mcdonald.models.Customer;
import com.mcdonald.repositories.BankCustomerCRUD;

@Service
public class CustomerService {
	@Autowired
	BankCustomerCRUD bcc;
	
	public Customer getCustomer(String username) {
		return bcc.findByUsername(username);
	}
	public Customer createCustomer(Customer c) {
		return bcc.saveAndFlush(c);
	}
	public void updateCustomer(Customer c) {
		bcc.saveAndFlush(c);
	}
	public void deleteCustomer(int id) {
		bcc.deleteById(id);
	}
	public void flush() {
		bcc.flush();
	}
}
