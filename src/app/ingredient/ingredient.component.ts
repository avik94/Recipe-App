import { Component, OnInit } from '@angular/core';
import { IngredienceService } from '../common/ingredience.service';
import { Ingredience } from './ingredience.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  ingrediences:Ingredience[];

  constructor( private ingredienceService: IngredienceService) { }

  ngOnInit() {
    this.ingrediences = this.ingredienceService.getAllIngredience();
  }
  getIngredienceSubmitedData(name,ammount){
    this.ingredienceService.putDataInIngredience(name.value,ammount.value)
  }

}
