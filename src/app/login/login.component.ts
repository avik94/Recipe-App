import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    "email": new FormControl(null,Validators.required),
    "password": new FormControl(null,Validators.required)
  });
  loginFormSubmit(){
    console.log(this.loginForm)
    this.router.navigate([''])
  }

}
