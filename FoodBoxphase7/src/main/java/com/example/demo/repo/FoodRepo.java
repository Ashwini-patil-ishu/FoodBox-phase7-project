package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.pojo.Food;
@Repository
public interface FoodRepo extends JpaRepository<Food,Integer>{

//	@Query("Select f from Food f where f.name LIKE %?1%"+"OR f.cuisine LIKE %?1%")
//	public List<Food> findBySearch(String keyword);
//	
	@Query("Select f from Food f where f.cuisine=?1")
	public List<Food> findByCuisine(String Keyword);
	
	@Query("Select f from Food f where f.id=?1")
	public Food findBbyId(int id);
	
	@Query("Select f from Food f ORDER BY f.price ASC")
	public List<Food> sortASC();
	
	@Query("Select f from Food f ORDER BY f.price DESC")
	public List<Food> sortDESC();
}
