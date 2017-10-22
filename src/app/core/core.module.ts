import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing-module';
import { ShoppingListService } from '../shopping/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';


@NgModule({
	declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule, 
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard]
  // could add authguard to recipe-routing-module if it wasn't used in app routing.  Guards are the only service that should
  // be added to a routing module
})

export class CoreModule {

}