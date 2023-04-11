import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuisine } from '../Module/cuisine';
@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  url:string="http://localhost:8082/api/cuisine/";
  constructor(private http:HttpClient) { }
  public getAllCuisine(){
    return this.http.get(this.url+"getAllCuisine")
  }
}
