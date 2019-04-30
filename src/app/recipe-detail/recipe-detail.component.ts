import { Component, OnInit, Input } from '@angular/core';
import { IngredienceService } from '../common/ingredience.service';
import { Ingredience } from '../ingredient/ingredience.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() data;
  ingredience:Ingredience[];
  
  constructor(private ingredienceService:IngredienceService){
    
  }
  ngOnInit() {
    this.ingredience = this.ingredienceService.getAllIngredience();
  }

}
