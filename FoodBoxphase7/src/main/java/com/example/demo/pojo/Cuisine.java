package com.example.demo.pojo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
public class Cuisine {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int cid;
private String cuisine;


public int getCid() {
	return cid;
}
public void setCid(int cid) {
	this.cid = cid;
}
public String getCuisine() {
	return cuisine;
}
public void setCuisine(String cuisine) {
	this.cuisine = cuisine;
}



}