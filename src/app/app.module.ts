import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { Cartitems } from './cartitems';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MyordersComponent } from './myorders/myorders.component';
import { Userdata } from './userdata';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ToastrModule} from 'ngx-toastr'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AboutComponent,
    LoginComponent,
    SignUpComponent,
    PaymentComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,MatCardModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule
    
    
  ],
  providers: [Cartitems,Userdata],
  bootstrap: [AppComponent]
})
export class AppModule { }
