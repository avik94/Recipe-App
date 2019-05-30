import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private serverService: ServerService,
    private router:Router ) { }
  message;
  showMsg = false;
  ngOnInit() {
  }
  submitform(data:NgForm){
    this.serverService.createUser(data.value).subscribe(
      (response)=>{
        if(response["msg"] === "Email Already Registered"){
          this.message = "Email Already Registered"
          this.showMsg = true;
        }else{
          this.router.navigate(['/login']);
        }        
      }
    )
    data.reset();
  }

}
