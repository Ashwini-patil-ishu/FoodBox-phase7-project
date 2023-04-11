package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.BankDetails;
import com.example.demo.service.BankService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/bank")
public class BankController {
	@Autowired
	private BankService service;
	
	@PostMapping("bank/addBank")
	public ResponseEntity<BankDetails> addBank(@RequestBody BankDetails bd) {
		BankDetails mm=service.insert(bd);
	if(mm!=null) {
		return new ResponseEntity<BankDetails>(mm,HttpStatus.CREATED);
	}
		else {
			return new ResponseEntity<BankDetails>(mm,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	@GetMapping("bank/getBankDetails/{id}")
	public int getBankById(@PathVariable int id){
	return service.findBalanceById(id);
	}
	@GetMapping("bank/getBankDetailsByBname/{bname}")
	public int getBankByBname(@PathVariable String bname){
	return service.findBalanceByBname(bname);
	}

}
