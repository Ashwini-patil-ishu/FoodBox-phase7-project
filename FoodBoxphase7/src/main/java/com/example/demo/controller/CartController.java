package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.Cart;
import com.example.demo.service.CartService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/cart")
public class CartController {
	@Autowired
	private CartService service;
	
	@PostMapping("cart/addToCart")
	public ResponseEntity<Cart> addToCart(@RequestBody Cart bd) {
		Cart mm=service.insert(bd);
	if(mm!=null) {
		return new ResponseEntity<Cart>(mm,HttpStatus.CREATED);
	}
		else {
			return new ResponseEntity<Cart>(mm,HttpStatus.INTERNAL_SERVER_ERROR);
	}
	}
	@GetMapping("cart/getAllCart")
	public List<Cart> getCart(){
	return service.findAll();
	}
	@DeleteMapping("cart/flush")
	public ResponseEntity<String>deleteAllFromCart(){
		boolean result = service.deleteAllFromCart();
		if(result) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO movie Found", HttpStatus.NOT_FOUND);
		
	}
	}

