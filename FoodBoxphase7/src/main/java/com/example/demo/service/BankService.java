package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.pojo.BankDetails;
import com.example.demo.repo.BankRepo;

@Service
public class BankService {
	@Autowired
	BankRepo repo;


	public BankDetails insert(BankDetails bd) {
		return repo.save(bd);
	}

	public int findBalanceById(int id) {
		return repo.findBalanceByID(id);
	}
	public int findBalanceByBname(String bname) {
		return repo.findBalanceByName(bname);
	}

}
