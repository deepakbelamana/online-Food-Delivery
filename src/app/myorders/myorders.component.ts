import { Component, OnInit } from '@angular/core';
import { Cartitems } from '../cartitems';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  isloggedin:boolean=false;
  loggedin:boolean=true;
  name:any;
  cartItems:string[]=[];
  orderid:number=0;
  constructor(private userdata:Userdata) { }
   
  ngOnInit(): void {
    if(this.userdata.username==" ")
    {
       this.isloggedin=!this.isloggedin;
       this.loggedin=!this.loggedin;
    }
    else{
           this.name=this.userdata.username;
           this.orderid=this.userdata.orderId; 
           this.cartItems=this.userdata.items   
    }
  }
  

}
