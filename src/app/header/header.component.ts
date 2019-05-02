import { Component, OnInit } from '@angular/core';
import { IngredienceService } from '../common/ingredience.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private ingredienceService: IngredienceService) { }

  ngOnInit() {
  }
  closeRecipe(){
    this.ingredienceService.recipeDataEvent.emit(false);
  }
  openRecipe(){
    this.ingredienceService.recipeDataShowEvent.emit(true);
  }

}
