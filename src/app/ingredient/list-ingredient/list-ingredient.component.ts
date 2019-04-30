import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {
  @Input() ingredienceData;

  constructor() { }

  ngOnInit() {
  }

}
