import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  submitRecipe(name,description,url){
    this.recipeService.putRecipe(name.value,description.value,url.value)
    this.recipeService.closeEvent.emit(false);
  }
  cancel(){
    this.recipeService.closeEvent.emit(false);
  }
  

}
