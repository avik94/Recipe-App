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
  @Input() ingred;
  
  constructor(private ingredienceService:IngredienceService){
    
  }
  ngOnInit() {
    //will change soon
    // const newArry = this.data.ingrediences.slice();
    // this.ingredience = newArry;
    console.log(this.ingred)
  }

}
