package com.mcdonald.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mcdonald.models.Accounts;
import com.mcdonald.repositories.BankAccountCRUD;

@Service
public class AccountService {
	@Autowired
	BankAccountCRUD bac;
	
	public Accounts getAccount(int id, String type) {
		return bac.findByIdAndType(id, type);
	}
	
	public Accounts createAccount(Accounts a) {
		return bac.saveAndFlush(a);
	}
	
	public void updateAccount(Accounts a) {
		bac.saveAndFlush(a);
	}
	
	public void deleteAccount(int id) {
		bac.deleteById(id);
	}

	public void flush() {
		bac.flush();
	}
}
