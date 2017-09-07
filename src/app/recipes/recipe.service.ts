import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list.service';

@Injectable()
export class RecipeService {

	private recipes: Recipe[] = [
  		new Recipe(1, 'Chicken Fajitas', 'Mexican meal',
  		 	'http://simplyhomecooked.com/wp-content/uploads/2015/04/last-fajita.jpg', [
           new Ingredient('Chicken breast', 1),
           new Ingredient('Tortillas', 1),
           new Ingredient('Taco Sauce', 1),
           new Ingredient('Onion', 1),
           new Ingredient('Capsicum', 1)
         ]),
  		new Recipe(2, 'Bean chilli', 'Spicy vegetarian chilli', 
  			'http://i4.mirror.co.uk/incoming/article5358911.ece/ALTERNATES/s810/ONE-USE-Slimming-world-mixed-bean-tex-mex-chilli.jpg',
         [
           new Ingredient('Kidney beans', 1),
           new Ingredient('Chick peas', 1),
           new Ingredient('Passata', 1),
           new Ingredient('Brown rice', 1),
           new Ingredient('Capsicum', 1)
         ])
  	];

    constructor(private shoppingListService: ShoppingListService){}

  	getRecipes() {
  		return this.recipes.slice();    // returns copy of array, not actual array
  	}

    getRecipe(id: number) {
      return this.recipes[id-1];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
    }

}