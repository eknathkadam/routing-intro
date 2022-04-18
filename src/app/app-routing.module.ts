import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GooglesigninComponent } from './signin/googlesignin/googlesignin.component';
import { Component } from '@angular/core';
import { EmailsigninComponent } from './signin/emailsignin/emailsignin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"signin", component:SigninComponent, children:[
    {path:"googlesignin", component:GooglesigninComponent},
    {path:"emailsignin", component:EmailsigninComponent},
    {path:"", redirectTo:"googlesignin", pathMatch:"full"},

  ]},
  {path:"forgotpassword",component:ForgotpasswordComponent},
  {path:"verifyemail",component:VerifyemailComponent},
  {path:"logout",component:LogoutComponent},
  {path:"**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
