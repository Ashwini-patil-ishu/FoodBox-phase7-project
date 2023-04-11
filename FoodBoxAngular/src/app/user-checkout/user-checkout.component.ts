import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../Service/cart.service';
import { FoodService } from '../Service/food.service';
@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrls: ['./user-checkout.component.css']
})
export class UserCheckoutComponent implements OnInit {
  
  constructor(private service: CartService,private router: Router,private foodservice: FoodService) {}

  carts:any;
  ngOnInit(): void {
    let response=this.service.getAllFoodsInCart()
    response.subscribe((data:any)=>this.carts=data)
  }
  btnClick() {
    this.router.navigateByUrl('/payment-done');
  };
}