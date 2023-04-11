import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FoodClass } from '../Module/FoodClass';
import { FoodService } from '../Service/food.service';
@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  constructor(private router:Router, private service:FoodService) { }
  food:FoodClass[];
  ngOnInit(): void {
    this.service.getAllFood().subscribe(result=>this.food=result);
  }
  DeleteFoodById(id:number){
    //refresh the list once user is deleted
    this.food=this.food.filter(c=>c.id!=id);
    //delete user
    this.service.deleteById(id);
    console.log("food Deleted");

}
}