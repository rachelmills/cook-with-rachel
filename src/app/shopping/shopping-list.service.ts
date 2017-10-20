import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

	ingredientsChanged = new Subject<Ingredient[]>()
	startedEditing = new Subject<number>();

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

	getIngredient(index: number) {
		return this.ingredients[index];
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	removeIngredient(index: number) {
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	setIngredients(ingredients: Ingredient[]) {
      this.ingredients = ingredients;
      this.ingredientsChanged.next(this.ingredients.slice());
    }
}