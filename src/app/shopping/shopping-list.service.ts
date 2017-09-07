import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

	ingredientsChanged = new Subject<Ingredient[]>()

	private ingredients: Ingredient[] = [
		new Ingredient("Apples", 5),
		new Ingredient("Tomatoes", 10)
	]	

	addIngredientItem(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredients(ingredients: Ingredient[]) {
		// for (let ingredient of ingredients) {
		// 	this.addIngredientItem(ingredient);
		// }
		this.ingredients.push(...ingredients);   // the spread operator (three dots) converts array to list
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	getIngredients() {
		return this.ingredients.slice();
	}
}