import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../Module/cart';
import { FoodClass } from '../Module/FoodClass';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  url:string="http://localhost:8082/api/cart/";
  constructor(private http:HttpClient) { }

  addToCart(cart:any):Observable<any>{
    return this.http.post(this.url,cart).pipe();
  }
  public getAllFoodsInCart(){
    return this.http.get(this.url+"getAllFood")
  }
}
