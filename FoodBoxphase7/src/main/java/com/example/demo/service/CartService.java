package com.example.demo.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.pojo.Cart;
import com.example.demo.repo.CartRepo;

@Service
public class CartService {
	
	@Autowired
	CartRepo repo;

	public Cart insert(Cart c) {
		return repo.save(c);
	}
	public List<Cart> findAll(){
		return repo.findAll();
	}
	public boolean deleteAllFromCart() {
		repo.deleteAll();
		
			return true;
		
	}
}
