import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] },
  { path: 'shopping', loadChildren: './shopping/shopping-list.module#ShoppingListModule' },
 ];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)  // forRoot can only be called in app module, otherwise use forChild
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}