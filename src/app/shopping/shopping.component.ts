import { Component, OnInit, ViewChild } from '@angular/core';
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
  avik
  ingredients:Ingredient[];
  recipeId:number;
  ingredientIndex:number;
  showDelete = false;
  @ViewChild('ingredForm') formData:NgForm;

  constructor(private ingredientService:IngredientService,
    private recipeService:RecipeService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredient();
  }

  saveIngredients(formData:NgForm){
    this.ingredients.push(formData.value);
    formData.reset();  
  } 
  clearAll(){
    this.formData.reset();
  }
  selectEachIngredient(ingredient:Ingredient,index:number){
    this.formData.setValue({
      'name': ingredient.name,
      'ammount': ingredient.ammount
    });
    this.showDelete = true;
    this.ingredientIndex = index
  }
  deleteIngredient(){
    this.ingredients.splice(this.ingredientIndex,1)
  }
}
