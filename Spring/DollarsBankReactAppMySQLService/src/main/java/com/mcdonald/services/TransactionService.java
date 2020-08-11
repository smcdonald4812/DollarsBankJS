package com.mcdonald.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mcdonald.models.Transaction;
import com.mcdonald.repositories.BankAccountCRUD;
import com.mcdonald.repositories.BankTransactionCRUD;

@Service
public class TransactionService {
	@Autowired
	BankTransactionCRUD btc;
	
	public List<Transaction> getTransactions(int id, String type) {
		return btc.getAllById(id, type);
	}
	
	public Transaction createTransaction(Transaction t) {
		return btc.saveAndFlush(t);
	}
	
	public void updateTransaction(Transaction t) {
		btc.saveAndFlush(t);
	}
	
	public void deleteTransaction(int id) {
		btc.deleteById(id);
	}
	public void flush() {
		btc.flush();
	}
}
