import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  index;
  previewImage;
  editMode = false;
  recipeForm:FormGroup
  constructor( private route:ActivatedRoute, 
    private recipeService:RecipeService, private router:Router ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        if(param.id){
          this.editMode = true;
          this.index = +param.id
        }
        this.formInit();
      }); 
  }
  private formInit(){
    let name = '';
    let imagePath = '';
    let description = '';
    let ingredients = new FormArray([]);

    if(this.editMode) {
      const recipe = this.recipeService.getRecipeById(this.index);
      name = recipe.name;
      imagePath = recipe.url;
      description = recipe.description
      if(recipe.ingredient){
        for (let ingredient of recipe.ingredient){
          ingredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'ammount': new FormControl(ingredient.ammount, Validators.required)
          }))
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'url': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredient' : ingredients
    })
    
  }

  saveForm(){
    if (this.editMode){
      this.recipeService.updateRecipe(this.index,this.recipeForm.value);
      this.router.navigate(['recipe',this.index, 'detail']);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value)
      this.router.navigate(['recipe']);
    }
    console.log(this.recipeForm.value);
  }

  cancel(){
    if(this.editMode){
      this.router.navigate(['recipe',this.index, 'detail']);
    }else{
      this.router.navigate(['recipe']);
    }
  }

  addIngredient(){
    (<FormArray>this.recipeForm.get('ingredient')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'ammount': new FormControl(null, Validators.required)
    }))
  }  

  deleteIngerdient(ingredientId){
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(ingredientId);
  }

}
