import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,
    private serverService: ServerService) { }

  ngOnInit() {
  }
  message;
  showMsg = false;
  route = false;
  loginForm = new FormGroup({
    "email": new FormControl(null,Validators.required),
    "password": new FormControl(null,Validators.required)
  });
  loginFormSubmit(){
    this.serverService.logUser(this.loginForm.value).subscribe(
      (data)=>{
        if(data["msg"] === "Wrong Password"){
          this.message = "Wrong Password";
          this.showMsg = true;
        }else{
          localStorage.setItem('id',data["id"]);
          localStorage.setItem('token',data["token"]);
          this.router.navigate(['']);
        }
      }
      )
  }

}
