import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
	declarations: [
		ShoppingListComponent,
    ShoppingListEditComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ShoppingListRoutingModule
	]
})
export class ShoppingListModule {

}