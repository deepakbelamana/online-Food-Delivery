import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userdata } from '../userdata';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private userdata:Userdata) { }
  hide:boolean=true;
  ngOnInit(): void {
  }
   onsubmit(form:any)
   {
      alert("login successfull..!");
      this.userdata.username=form.username;
      this.route.navigate(['/']);
   }
}
