import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodClass } from '../Module/FoodClass';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  url:string="http://localhost:8082/api/food/";
  constructor(private http:HttpClient) { }
    //get all foods
  getAllFood():Observable<FoodClass[]>{
    return this.http.get<FoodClass[]>(this.url);
  
  }
  //create record
 create(data:any ):Observable<any>{
  return this.http.post(this.url,data).pipe();
}
getFoodById(id:number):Observable<FoodClass>{
  return this.http.get<FoodClass>(this.url+id);
}

getFoodByName(name:string):Observable<FoodClass>{
  return this.http.get<FoodClass>(this.url+name);
}
getFoodList():Observable<FoodClass[]>{
  return this.http.get<FoodClass[]>(`${this.url}/cust`);
}
ASCFoodList():Observable<FoodClass[]>{
  return this.http.get<FoodClass[]>(this.url+"ASCFoodList");
}
DECFoodList():Observable<FoodClass[]>{
  return this.http.get<FoodClass[]>(this.url+"DECFoodList");
}
getFoodByCuisine():Observable<FoodClass[]>{
  return this.http.get<FoodClass[]>(this.url+"getFoodByCuisine");
}
//deleteById
deleteById(id:number){
  let myid=id;
  this.http.delete(this.url+myid).subscribe(data=>{
    return this.getAllFood();
  });
}

//update Food
updateFood(cust:FoodClass,id:number){
  return this.http.put(this.url+id,cust);
}
FoodIDForCart(id:number):Observable<FoodClass[]>{
  return this.http.get<FoodClass[]>(this.url+id)
}
}
