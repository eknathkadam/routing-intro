import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  routes =[
    {linkname:"signin", url:"/signin"},
    {linkname:"signup", url:"/signup"},
    {linkname:"signin", url:"/signin"},
    {linkname:"forgotpassword", url:"/forgotpassword"},
    {linkname:"verifyemail", url:"/verifyemail"},
    {linkname:"logout", url:"/logout"},
    {linkname:"home", url:"/home"}
  ];
}
