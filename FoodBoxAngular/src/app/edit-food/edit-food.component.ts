import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { FoodClass } from '../Module/FoodClass';
import { FoodService } from '../Service/food.service';
@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit{

  food: FoodClass;
  id: string | null;
  registerForm!: FormGroup;
  submitted:boolean=false;
  constructor(private service:FoodService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getFoodById(Number(this.id)).subscribe(x=>this.food=x);

    this.registerForm=this.builder.group({
      name:['',Validators.required],
      image:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
      discount:['',Validators.required],
      available:['',Validators.required],
      
      price:['',Validators.required],
      

    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      {
        this.service.updateFood(this.food,Number(this.id)).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['list'])
      }
  }
}

