import { Component, OnInit } from '@angular/core';
import { IngredientService } from "../shared/ingredient.service"
import { Ingredient } from './ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../recipe/recipe.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients:Ingredient[];
  recipeId;

  constructor(private ingredientService:IngredientService,
    private recipeService:RecipeService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredient();
    this.route.params.subscribe(
      (param: Params)=>{
        this.recipeId = param.id
      }
    );
  }

  saveIngredients(data:NgForm){
    this.ingredientService.addIngredient(data.value.ingredient, data.value.ammount,this.recipeId);
    data.reset();  
  }

  submit(){
    this.recipeService.getSeparateIngredience(this.recipeId);
    this.ingredientService.clearAllIngredients();
  }
  
}
