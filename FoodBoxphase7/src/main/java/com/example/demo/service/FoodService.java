package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.pojo.Food;
import com.example.demo.repo.FoodRepo;

@Service
public class FoodService {
	
	@Autowired
	private FoodRepo repo;
	
	public Food addFood(Food f) {
		return repo.save(f);
	}
	public List<Food> getAllFood(){
		return repo.findAll();
	}
	
	public Food getFoodById(int id) {
		if(repo.findById(id).isPresent()) {
			return repo.findById(id).get();
		}
		else {
			return null;
		}
	}
	public Food updateFood(int id, Food newFood) {
		if(repo.findById(id).isPresent()) {
			Food food = repo.findById(id).get();
		    food.setName(newFood.getName());
		    food.setCategory(newFood.getCategory());
		    food.setDescription(newFood.getDescription());
		    food.setAvailable(newFood.getAvailable());
		    food.setDiscount(newFood.getDiscount());
		    food.setPrice(newFood.getPrice());
		    food.setImage(newFood.getImage());
		    return repo.save(food);
		}
		else {
			return null;
		}
	}
	
	public boolean deleteFood(int id) {
		if(repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		else {
			return false;
		}
	}

//public List<Food> findBySearch(String keyword){
//	return repo.findBySearch(keyword);
//}
//
public List<Food> findByCuisine(String keyword){
	return repo.findByCuisine(keyword);
}

public List<Food> sortAsc(){
	return repo.sortASC();
}

public List<Food> sortDESC(){
	return repo.sortDESC();
}

}
