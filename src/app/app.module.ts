import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { VerifyemailComponent } from './verifyemail/verifyemail.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GooglesigninComponent } from './signin/googlesignin/googlesignin.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForgotpasswordComponent,
    VerifyemailComponent,
    LogoutComponent,
    PagenotfoundComponent,
    GooglesigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
