import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  routes =[
    {linkname:"googlesignin", url:"googlesignin"},
    {linkname:"emailsignin", url:"emailsignin"},
  ];
}
