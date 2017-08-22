import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe('Fajitas', 'Mexican meal', 'http://simplyhomecooked.com/wp-content/uploads/2015/04/last-fajita.jpg'),
  	new Recipe('Fajitas', 'Mexican meal', 'http://simplyhomecooked.com/wp-content/uploads/2015/04/last-fajita.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
