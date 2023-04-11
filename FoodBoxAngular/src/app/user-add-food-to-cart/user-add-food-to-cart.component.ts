import { Component ,OnInit} from '@angular/core';
import { CartService } from '../Service/cart.service';
import { FoodService } from '../Service/food.service';
import { FoodClass } from '../Module/FoodClass';
import { Cart } from '../Module/cart';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-add-food-to-cart',
  templateUrl: './user-add-food-to-cart.component.html',
  styleUrls: ['./user-add-food-to-cart.component.css']
})
export class UserAddFoodToCartComponent implements OnInit {
  // url:string="http://localhost:8082/api/food/getAllFood";
  constructor(private service: FoodService,private router: Router, cartservice:CartService, private http:HttpClient) {}
  email:string="";
  cart:Cart=new Cart();
  carts:any;
  food:FoodClass[];
  foods:any;
  user:string="";
    ngOnInit(): void {

      //   let id=this.service.FoodIDForCart();

      //  let resp1=this.service.getFoodById(id);
      //  resp1.subscribe((data:any)=>this.food=data)
      
        // let response = this.http.get("http://localhost:8082/api/food/getFoodById");
        
        this.service.getAllFood().subscribe(result=>this.food=result);
        let obj = sessionStorage.getItem("userdetails");
        if(obj!=null){
          this.user=obj;
          this.email=obj;
        //   let response2=this.service.getFoodByCuisine;
        // response2.subscribe((data:any)=>this.cuisine=data)
        }
        // this.viewcart(this.email);
      
    
        let response = this.http.get("http://localhost:8082/api/food/getAllFood");
        response.subscribe((data)=>{
          this.foods =data;
          console.log(this.food);
        });

    }
    // getFoodById(id:number):Observable<FoodClass>{
    //   return this.http.get<FoodClass>(this.url+id);
    // }
    
    gotofood(){
      
  
      this.router.navigate(['/food']);
    }

   process() {


      this.router.navigate(['/user-checkout']);
    }
    
    

  }
