import { Component, OnInit } from '@angular/core';
import { Cartitems } from '../cartitems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
BreakFast:any;
Lunch:any;
SnackUp:any;
Dinner:any;
Beverages:any;
orders:string[]=[];
hidden = false;
cartlength:number=0;
deleteItem:any;
  index:any;
  constructor(private items: Cartitems) { }
  
 

  ngOnInit(): void {
    this.cartlength=this.items.cartlength;
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
BkFt(){
    this.items.breakfast=this.BreakFast;
    this.items.cartlength++;
    this.cartlength=this.items.cartlength;
    this.orders=[this.items.breakfast,...this.orders];
}
Lun(){
    this.items.lunch=this.Lunch;
    this.items.cartlength++;
    this.cartlength=this.items.cartlength;
    this.orders=[this.items.lunch,...this.orders];
}
SnckUp(){
    this.items.snackup=this.SnackUp;
    this.items.cartlength++;
    this.cartlength=this.items.cartlength;
    this.orders=[this.items.snackup,...this.orders];
}
Din(){
    this.items.dinner=this.Dinner;
    this.items.cartlength++;
    this.cartlength=this.items.cartlength;
    this.orders=[this.items.dinner,...this.orders];
}
Bev(){
  this.items.bevarages=this.Beverages;
  this.items.cartlength++;
  this.cartlength=this.items.cartlength;
  this.orders=[this.items.bevarages,...this.orders];
}
removeFromCart()
    {
      this.index=this.orders.indexOf(this.deleteItem);
      this.orders.splice(this.index,1);
      this.items.cartlength--;
      this.deleteItem=" ";
    }
EmptyCart()
{
  this.orders=[" "];
}

}
