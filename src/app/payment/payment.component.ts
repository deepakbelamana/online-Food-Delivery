import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cartitems } from '../cartitems';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private cartitems:Cartitems,private userdata : Userdata,private router:Router,private route:ActivatedRoute) { }
  address:any;
  displaydiv:boolean=false;
  ngOnInit(): void {
  }
  paymentSubmit()
  {
    alert("payment successful...!");
    this.displaydiv=!this.displaydiv;
    this.userdata.items=[this.cartitems.breakfast,this.cartitems.lunch,this.cartitems.bevarages,this.cartitems.dinner,this.cartitems.snackup];
    this.userdata.orderId=Math.ceil(Math.random()*10000);
    console.log(this.userdata.orderId);
    this.router.navigate(['/userdata'])
  }
}