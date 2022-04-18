import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"", redirectTo:"signup", pathMatch:"full"},
  {path:"signup",component:SignupComponent},
  {path:"signin", component:SigninComponent},
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
