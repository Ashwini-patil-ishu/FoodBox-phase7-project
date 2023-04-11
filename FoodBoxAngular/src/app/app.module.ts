import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserAddFoodToCartComponent } from './user-add-food-to-cart/user-add-food-to-cart.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { PaymentDoneComponent } from './payment-done/payment-done.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    AdminPortalComponent,
    UserPortalComponent,
    AdminRegisterComponent,
    AdminLoginComponent,
    RegistrationComponent,
    LoginComponent,
    AdmindetailsComponent,
    AdminlistComponent,
    UserdetailsComponent,
    UserlistComponent,
    FoodComponent,
    FoodlistComponent,
    FooddetailsComponent,
    AddfoodComponent,
    EditFoodComponent,
    EditAdminComponent,
    EditUserComponent,
    UserCartComponent,
    UserAddFoodToCartComponent,
    UserCheckoutComponent,
    PaymentDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
