import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PaymentComponent } from './payment/payment.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
{path:"", component:HomeComponent},
{path:"abc", component:SignUpComponent},
{path:"xyz", component:HomeComponent},
{path:"lmn", component:CartComponent},
{path:"yyy", component:AboutComponent},
{path:"login",component:LoginComponent},
{
  path:"payment",component:PaymentComponent
},
{
  path:"about",component:AboutComponent
},
{
  path:"userdata",component:MyordersComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
