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
import com.mcdonald.models.Customer;
import com.mcdonald.models.Transaction;
import com.mcdonald.services.AccountService;
import com.mcdonald.services.CustomerService;
import com.mcdonald.services.TransactionService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/customer")
public class BankCustomerController {
	@Autowired
	CustomerService cs;
	@Autowired
	AccountService as;
	@Autowired
	TransactionService ts;
	
	@GetMapping("/{username}/{password}")
	public Customer getCustomer(@Valid @PathVariable String username, @Valid @PathVariable String password) {
		Customer c = cs.getCustomer(username);
		if(c.getPassword().equals(password)) {
			return c;
		} else {
			return null;
		}
	}
	@PostMapping("/create/{amount}")
	public void createCustomer(@Valid @RequestBody Customer c, @Valid @PathVariable float amount) {
		cs.createCustomer(c);
		Customer cust = cs.getCustomer(c.getUsername());
		System.out.println(cust.toString());
		as.createAccount(new Accounts(0, cust.getId(), amount, "CHECKING"));
		Accounts a = as.getAccount(cust.getId(), "CHECKING");
		System.out.println(a.toString());
		ts.createTransaction(new Transaction(0, cust.getId(), a.getId(), amount, 0.0f, amount, "CHECKING"));
		as.createAccount(new Accounts(a.getId()+1, cust.getId(), 0.0f, "SAVINGS"));
		Accounts b = as.getAccount(cust.getId(), "SAVINGS");
		System.out.println(b.toString());
		ts.createTransaction(new Transaction(b.getId()+1, cust.getId(), b.getId(), 0.0f, 0.0f, 0.0f, "SAVINGS"));
	}
	
	@PutMapping("/update")
	public void updateCustomer(@Valid @RequestBody Customer c) {
		cs.updateCustomer(c);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteCustomer(@Valid @PathVariable int id) {
		cs.deleteCustomer(id);
	}
}
