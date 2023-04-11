import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodClass } from '../Module/FoodClass';
import { FoodService } from '../Service/food.service';
@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit{

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private service:FoodService){ }

  food:FoodClass
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id:",id);
    this.service.getFoodById(Number(id)).subscribe(data=>this.food=data)
  }

  btnClick() {
    this.router.navigateByUrl('/user-checkout');
  };
}