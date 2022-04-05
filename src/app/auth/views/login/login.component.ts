import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  groupForm1!: FormGroup;
  userForm = new FormControl('', [Validators.required]);
  pswForm = new FormControl('', [Validators.required]);

  constructor(private router: Router) { }

  login(user: string, pass: string){
    const usuario = 'esedor';
    const password = '123';
    if (user === usuario && pass === password){
      this.router.navigateByUrl('/loyout/empresas');
    }
  }

  /*this.router.navigateByUrl('/auth/signup');*/

  ngOnInit(): void {
  }

}
