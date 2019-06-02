import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shopping/ingredient.model';
import { IngredientService } from 'src/app/shared/ingredient.service';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  ingredients:Ingredient[];
  dropdown = false;
  recipeIndex;
  
  constructor( 
    private route: ActivatedRoute,
    private router: Router, 
    private recipeService: RecipeService,
    private ingredientService: IngredientService,
    private serverService: ServerService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.recipe = this.recipeService.getRecipeById(params.id);
        this.ingredients = this.recipe.ingredient;
        this.recipeIndex =  params.id;
      }
    )     
  }

  openDropDown(){
    this.dropdown = !this.dropdown;
  }
  setIngredient(){
    this.ingredientService.addEntireIngredient(this.ingredients)
  }
  editIngredient(){
    this.router.navigate(['/recipe', this.recipeIndex , 'edit']);
    this.dropdown = false;
    this.serverService.getRecipe(this.recipe.name).subscribe(
      (data)=>{
        let id = ""+data
        localStorage.setItem('recipeId',id)
      }
    )
  }
  deleteIngredient(){
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.serverService.getRecipe(this.recipe.name).subscribe(
      (data)=>{
        let id = ""+data
        localStorage.setItem('recipeId',id)
      }
    )
    setTimeout(() => {
      this.serverService.deleteRecipe().subscribe(
        (data)=>{
          console.log(data)
        }
        )
        this.router.navigate(['recipe'])
    }, 1000);
  }

}
