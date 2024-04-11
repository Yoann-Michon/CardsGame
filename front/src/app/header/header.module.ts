import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../log/signin/signin.component';
import { SignupComponent } from '../log/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderComponent,SigninComponent,SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
