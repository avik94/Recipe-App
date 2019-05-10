import { Component, OnInit } from '@angular/core';
import { IngredientService } from "../shared/ingredient.service"
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredients:Ingredient[];

  constructor(private ingredientService:IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredient()
  }

}
