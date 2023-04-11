package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.Cuisine;
import com.example.demo.service.CuisineService;
@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/cuisine")
public class CuisineController {
	@Autowired
	CuisineService service;
	
	@GetMapping("cuisine/getAllCuisine")
	public List<Cuisine> getAllCuisine(){
		return service.findAll();
	}
	@PostMapping("cuisine/addCuisine")
	public ResponseEntity<Cuisine> addCuisine(@RequestBody Cuisine f) {
		Cuisine mm=service.insert(f);
		if(mm!=null) {
			return new ResponseEntity<Cuisine>(mm,HttpStatus.CREATED);
		}
			else {
				return new ResponseEntity<Cuisine>(mm,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
