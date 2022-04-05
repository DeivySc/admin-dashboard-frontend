import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {AuthRoutingModule} from "./auth-routing.module";

import {MatFormFieldModule} from '@angular/material/form-field';
import {LoginComponent} from "./views/login/login.component";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import { SignupComponent } from './views/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthAppModule { }
