import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router } from '@angular/router';
import { FoodClass } from '../Module/FoodClass';
import { FoodService } from '../Service/food.service';
import { CuisineService } from '../Service/cuisine.service';
import { Cuisine } from '../Module/cuisine';
@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit{

  // cart:Array<cart>=[]
  email:string="";
  msg:string="";
  // items:Array<cart>=[]
  price:number=0;
  user:string="";
  food:FoodClass[];
  foods:any;
  cuisine:any;
  cuisineKeyword:any;
  sortPrice:any;
  search:any;
  constructor(private router:Router,private Cuisineservice:CuisineService, private service:FoodService,  private http:HttpClient) { }
 
  ngOnInit(): void {
    this.service.getAllFood().subscribe(result=>this.food=result);
    let obj = sessionStorage.getItem("userdetails");
    if(obj!=null){
      this.user=obj;
      this.email=obj;
    //   let response2=this.service.getFoodByCuisine;
    // response2.subscribe((data:any)=>this.cuisine=data)
    }
    // this.viewcart(this.email);
  

    let response = this.http.get("http://localhost:8082/api/medicine/getAllFood");
    response.subscribe((data)=>{
      this.foods =data;
      console.log(this.food);
    });
  }
  // public searchFood(){
  //   let response=this.service.getFoodBySearch(this.search)
  //   response.subscribe((data:any)=>this.foods=data)
  //    }
      // public searchByCuisine(){
      // let response=this.service.getFoodByCuisine(this.cuisineKeyword)
      //  response.subscribe((data:any)=>this.foods=data)
      //   }
       searchByPrice(){
        if(this.sortPrice==="ASC"){
          let response=this.service.ASCFoodList()
          response.subscribe((data:any)=>this.foods=data);
        }
        else{
          let response=this.service.DECFoodList()
          response.subscribe((data:any)=>this.foods=data);
        }
       }
     
    goToCart(){
      this.router.navigate(['./user-cart']);
    }
    getFoodByCuisine(){
      let response=this.service.getFoodByCuisine();
      response.subscribe((data:any)=>this.foods=data);
    }
    
    addFoodToCart(id:any){
    this.service.getFoodById=id;
    
      this.router.navigate(['./user-add-food-to-cart']);
    }
    getAllFood(){
      let response=this.service.getAllFood();
      response.subscribe((data:any)=>this.foods=data);
    }
}
