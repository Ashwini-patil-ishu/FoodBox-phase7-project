package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.pojo.Cuisine;

public interface CuisineRepo extends JpaRepository<Cuisine, Integer>{

}
