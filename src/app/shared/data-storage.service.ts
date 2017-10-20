import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { ShoppingListService } from '../shopping/shopping-list.service';
import { AuthService } from '../auth/auth.service';
import { Ingredient } from './ingredient.model';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
	constructor(private http: Http, private recipeService: RecipeService, private shoppingListService: ShoppingListService,
		private authService: AuthService) {}

	storeRecipes() {
		const token = this.authService.getToken();
	  return this.http.put('https://cook-with-rachel.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
	}

	storeShoppingList() {
	  return this.http.put('https://cook-with-rachel.firebaseio.com/shoppping-list.json', this.shoppingListService.getIngredients());	
	}

	getRecipes() {
		const token = this.authService.getToken();

	  return this.http.get('https://cook-with-rachel.firebaseio.com/recipes.json?auth=' + token)
	    .map(
	      (response: Response) => {
	      	const recipes: Recipe[] = response.json();
	      	for (let recipe of recipes) {
	      	  if (!recipe['ingredients']) {
	      	  	recipe['ingredients'] = [];
	      	  }
	      	}
	      	return recipes;
	      }
	    )
	    .subscribe(
          (recipes: Recipe[]) => {
            return this.recipeService.setRecipes(recipes);
          }
        );
	}

	getShoppingList() {
	  return this.http.get('https://cook-with-rachel.firebaseio.com/shoppping-list.json')
	    .map(
	      (response: Response) => {
	      	const ingredients: Ingredient[] = response.json();
	      	console.log(ingredients)
	      	return ingredients;
	      }
	    )
	    .subscribe(
	      (ingredients: Ingredient[]) => {
	        return this.shoppingListService.setIngredients(ingredients);
	      }
	    );
	}
}