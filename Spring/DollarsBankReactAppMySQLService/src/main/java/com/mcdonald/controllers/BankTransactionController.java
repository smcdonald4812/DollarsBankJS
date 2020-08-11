package com.mcdonald.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mcdonald.models.Transaction;
import com.mcdonald.services.TransactionService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/transaction")
public class BankTransactionController {
	@Autowired
	TransactionService ts;
	
	@GetMapping("/{id}/{type}")
	public List<Transaction> getTransactions(@Valid @PathVariable int id, @Valid @PathVariable String type) {
		return ts.getTransactions(id, type);
	}
	
	@PostMapping("/create")
	public void createTransaction(@Valid @RequestBody Transaction t) {
		ts.createTransaction(t);
	}
	
	@PutMapping("/update")
	public void updateTransaction(@Valid @RequestBody Transaction t) {
		ts.updateTransaction(t);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteTransaction(@Valid @PathVariable int id) {
		ts.deleteTransaction(id);
	}
}
