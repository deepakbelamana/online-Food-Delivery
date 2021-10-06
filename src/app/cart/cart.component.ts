import { Component, OnInit } from '@angular/core';
import { Cartitems } from '../cartitems';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orders:string[]=[];
  deleteItem:any;
  index:any;
  cartlength:number=0;
  constructor(private items: Cartitems) { }

  ngOnInit(): void {
      this.orders=[this.items.bevarages,this.items.breakfast,this.items.dinner,this.items.lunch,this.items.snackup];
      console.log(this.orders);
      this.cartlength=this.items.cartlength;
  }
    removeFromCart()
    {
      this.index=this.orders.indexOf(this.deleteItem);
      this.orders.splice(this.index,1);
      this.items.cartlength--;
    }
}
