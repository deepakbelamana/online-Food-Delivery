import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
   feedback:any;
  ngOnInit(): void {
  }
  onsubmit()
  {
    alert("Thanks for the feedback");
    this.feedback=" "
  }
}
