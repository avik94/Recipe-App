import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor( private route:ActivatedRoute, private recipeService:RecipeService ) { }
  showAdd = true
  showEdit = false
  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        if(param.id){
          this.showEdit = true;
          this.showAdd = false;
        }
      });
  }

  loadAddForm(data:NgForm){
    this.recipeService.addRecipe(data.value.recipeName, data.value.imageUrl,data.value.description);
    console.log(data.value);
  }

}
