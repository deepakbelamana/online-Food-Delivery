import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
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
  constructor(private items: Cartitems,private snck_bar :MatSnackBar) { }
  
 

  ngOnInit(): void {
    this.cartlength=this.items.cartlength;
  }
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
BkFt(){
    this.snck_bar.open('item added to the cart..!','dismiss',{
      duration:1500,
      panelClass: ['blue-snackbar'],
      verticalPosition:'top'
    })
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
    this.snck_bar.open('item added to the cart..!','dismiss',{
      duration:1500,
      panelClass: ['blue-snackbar'],
      verticalPosition:'top'
    })
}
SnckUp(){
    this.items.snackup=this.SnackUp;
    this.items.cartlength++;
    this.cartlength=this.items.cartlength;
    this.orders=[this.items.snackup,...this.orders];
    this.snck_bar.open('item added to the cart..!','dismiss',{
      duration:1500,
      panelClass: ['blue-snackbar'],
      verticalPosition:'top'
    })
}
Din(){
    this.items.dinner=this.Dinner;
    this.items.cartlength++;
    this.cartlength=this.items.cartlength;
    this.orders=[this.items.dinner,...this.orders];
    this.snck_bar.open('item added to the cart..!','dismiss',{
      duration:1500,
      panelClass: ['blue-snackbar'],
      verticalPosition:'top'
    })
}
Bev(){
  this.items.bevarages=this.Beverages;
  this.items.cartlength++;
  this.cartlength=this.items.cartlength;
  this.orders=[this.items.bevarages,...this.orders];
  this.snck_bar.open('item added to the cart..!','dismiss',{
    duration:1500,
      panelClass: ['blue-snackbar'],
      verticalPosition:'top'
  })
}
removeFromCart()
    {
      this.index=this.orders.indexOf(this.deleteItem);
      this.orders.splice(this.index,1);
      this.items.cartlength--;
      this.deleteItem=" ";
      this.snck_bar.open('item removed the cart..!','dismiss',{
        duration:1500,
        panelClass: ['blue-snackbar'],
        verticalPosition:'top'
      })
    }
EmptyCart()
{
  this.orders=[" "];
}

}
