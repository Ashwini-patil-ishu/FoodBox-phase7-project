import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { UserPortalComponent } from './user-portal/user-portal.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AdminlistComponent } from './adminlist/adminlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FoodComponent } from './food/food.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAddFoodToCartComponent } from './user-add-food-to-cart/user-add-food-to-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"admin-portal",component:AdminPortalComponent},
  {path:"user-portal",component:UserPortalComponent},
  {path:"admin-register",component:AdminRegisterComponent},
  {path:"admin-login",component:AdminLoginComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"admindetails/:id",component:AdmindetailsComponent},
  {path:"adminlist",component:AdminlistComponent},
  {path:"userdetails/:id",component:UserdetailsComponent},
  {path:"userlist",component:UserlistComponent},
  {path:"food",component:FoodComponent},
  {path:"fooddetails/:id",component:FooddetailsComponent},
  {path:"foodlist",component:FoodlistComponent},
  {path:"addfood",component:AddfoodComponent},
  {path:"edit-food/:id",component:EditFoodComponent},
  {path:"edit-admin/:id",component:EditAdminComponent},
  {path:"edit-user/:id",component:EditUserComponent},
  {path:"user-cart",component:UserCartComponent},
  {path:"user-add-food-to-cart",component:UserAddFoodToCartComponent},
  {path:"user-checkout",component:UserCheckoutComponent},
  {path:"payment-done",component:PaymentDoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
