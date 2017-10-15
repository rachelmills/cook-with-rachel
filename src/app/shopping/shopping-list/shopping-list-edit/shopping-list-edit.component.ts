import { Component, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {
	subscription: Subscription;
	editMode = false;
	editedItemIndex: number;
	editedItem: Ingredient;

	@ViewChild('f') shoppingForm: NgForm;

	constructor(private shoppingListService: ShoppingListService) {}

	ngOnInit() {
		this.subscription = this.shoppingListService.startedEditing
			.subscribe(
				(index: number) => {
					console.log(this.editedItemIndex);
					this.editedItemIndex = index;
					this.editMode = true;
					this.editedItem = this.shoppingListService.getIngredient(index);
					this.shoppingForm.setValue({
						name: this.editedItem.name,
						amount: this.editedItem.amount
					})
				}
			);
	}

	onSubmit() {
		console.log(this.shoppingForm);
		const newIngredient = new Ingredient(this.shoppingForm.value.name, this.shoppingForm.value.amount);
		if (this.editMode) {
			this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
		} else {
			this.shoppingListService.addIngredientItem(
			newIngredient
			);	
		}
		this.editMode = false;
		this.shoppingForm.reset();
	}

	onClear() {
		this.shoppingForm.reset();
		this.editMode = false;
	}

	onDelete() {
		this.shoppingListService.removeIngredient(this.editedItemIndex);		
		this.onClear();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}