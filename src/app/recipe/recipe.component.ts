import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  constructor( private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    
  }
  addMore(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
