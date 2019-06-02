import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router,
    private serverService: ServerService,
    private recipeService: RecipeService) { }

  ngOnInit() {
  }
  message;
  showMsg = false;
  route = false;
  signInMsg = false;
  loginForm = new FormGroup({
    "email": new FormControl(null,Validators.required),
    "password": new FormControl(null,Validators.required)
  });
  loginFormSubmit(){
    this.serverService.signIn(this.loginForm.value).subscribe(
      (data)=>{
        if(data["msg"] === "Wrong Password"){
          this.message = "Wrong Password";
          this.showMsg = true;
          this.signInMsg= false;
        }else{
          console.log(data)
          if(data["msg"] === "Please Sign In First"){
            this.message = "Please Sign In First";
            this.signInMsg = true;
          }else{
            localStorage.setItem('id',data["id"]);
            localStorage.setItem('token',data["token"]);
            this.serverService.getAllRecipe().subscribe(
              (data:Recipe[])=>{
                this.recipeService.placeRecipeFromDatabase(data)
              }
            )
            this.router.navigate(['']);
          }
        }
      }
      )
  }

}
