package com.mcdonald.controllers;

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

import com.mcdonald.models.Accounts;
import com.mcdonald.services.AccountService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/account")
public class BankAccountController {
	@Autowired
	AccountService as;
	
	@GetMapping("/{id}/{type}")
	public Accounts getAccount(@Valid @PathVariable int id, @Valid @PathVariable String type) {
		return as.getAccount(id, type);
	}
	@PostMapping("/create")
	public void createAccount(@Valid @RequestBody Accounts a) {
		as.createAccount(a);
	}
	
	@PutMapping("/update")
	public void updateAccount(@Valid @RequestBody Accounts a) {
		as.updateAccount(a);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteAccount(@Valid @PathVariable int id) {
		as.deleteAccount(id);
	}
}
