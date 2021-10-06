import { Component, OnInit } from '@angular/core';
import { Cartitems } from './cartitems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cartlength:number=0;
  title = 'OnlineFoodDelivery';
  constructor(private items: Cartitems) { }
  ngOnInit(): void {
    this.cartlength=this.items.cartlength;
  }
 
}
