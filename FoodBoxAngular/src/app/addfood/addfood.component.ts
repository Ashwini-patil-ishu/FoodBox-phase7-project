import { Component,OnInit } from '@angular/core';
import { FoodService } from '../Service/food.service';
@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit{
  isSubmitted=false;
  constructor(private service:FoodService){}
  ngOnInit(): void {
      
  }

  food={
   
    
    name:'',
    category:'',
    cuisine:'',
    discount:'',
    description:'',
    available:'',
    price:'',
    image:'',
  }
  addFood(){
    const data={

      name:this.food.name,
      category:this.food.category,
      cuisine:this.food.cuisine,
      discount:this.food. discount,
      description:this.food.description,
      available:this.food.available,
      price:this.food.price,
       image:this.food.image

    }
    if(!data.name){
      alert("food name shouls not be empty");
      return;
    }
    if(!data.category){
      alert("food category should not be empty");
      return;
    }
    if(!data.discount){
      alert("food discount should not be empty");
      return;
    }
    if(!data.description){
      alert("food description should not be empty");
      return;
    }
    if(!data.available){
      alert("food available should not be empty");
      return;
    }
   
    
    if(!data. price){
      alert("food price should not be empty");
      return;
    }
    if(!data.image){
      alert("food image should not be empty");
      return;
    }
    this.service.create(data).subscribe(
      response=>{ console.log(response);
        this.isSubmitted=true},
        error=>{console.log(error);}

    )

  }

}
