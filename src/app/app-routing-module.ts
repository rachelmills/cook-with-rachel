import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] },
  { path: 'shopping', loadChildren: './shopping/shopping-list.module#ShoppingListModule' },
 ];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, {preloadingStrategy	: PreloadAllModules})  // forRoot can only be called in app module, otherwise use forChild
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}