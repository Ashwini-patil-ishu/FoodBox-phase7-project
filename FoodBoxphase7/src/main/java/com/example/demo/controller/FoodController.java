package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojo.Food;
import com.example.demo.service.FoodService;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/food")
public class FoodController {
	
	@Autowired
	private FoodService service;
	
	@PostMapping("/")
public ResponseEntity<Food> addFood(@RequestBody Food f){
		
		Food food= service.addFood(f);
		
		if(food!=null)
			return new ResponseEntity<Food>(food,HttpStatus.CREATED);
		else
			return new ResponseEntity<Food>(food,HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	@GetMapping("/")
	public List<Food> getAllFood(){
		return service.getAllFood();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Food>getFoodById (@PathVariable int id){
		Food food= service.getFoodById(id);
		
		if(food!=null)
			return new ResponseEntity<Food>(food, HttpStatus.OK);
		else
			return new ResponseEntity<Food>(food, HttpStatus.NOT_FOUND);
	}
	@PutMapping("/{id}")
	public ResponseEntity<Object> updateFood(@PathVariable int id,@RequestBody Food newFood){
		Food food = service.updateFood(id, newFood);
		
		if (food!=null)
			return new ResponseEntity<Object>(food,HttpStatus.OK);
		else
			return new ResponseEntity<Object>("No User Available to Update",HttpStatus.NOT_FOUND);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String>deleteFood(@PathVariable int id){
		boolean result = service.deleteFood(id);
		if(result) 
			return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
		else
			return new ResponseEntity<String>("NO user Found", HttpStatus.NOT_FOUND);
		
	}
	@GetMapping("food/getAllFoodByASC")
	public List<Food> getAllFoodASC(){
		return service.sortAsc();
	}
	@GetMapping("food/getAllFoodByDESC")
	public List<Food> getAllFoodDESC(){
		return service.sortDESC();
	}
//	@GetMapping("food/getAllFoodBySearch/{keyword}")
//	public List<Food> getAllFoodBySearch(@PathVariable String keyword){
//		return service.findBySearch(keyword);
//	}
	@GetMapping("food/getAllFoodByCuisine/{keyword}")
	public List<Food> getAllFoodByCuisine(@PathVariable String keyword){
		return service.findByCuisine(keyword);
	}
}