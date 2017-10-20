import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private router: Router, private authService: AuthService) { }
  recipes: Recipe[];

  ngOnInit() {
  }

  onSaveData() {
  	if (this.router.url === '/shopping') {
      this.dataStorageService.storeShoppingList()
        .subscribe(
          (response: Response) => console.log(response),
          (error) => console.log(error)
        );
  	} else {
      this.dataStorageService.storeRecipes()
        .subscribe(
          (response: Response) => console.log(response),
          (error) => console.log(error)
        );
    }
  }

  onFetchData() {
  	if (this.router.url === '/shopping') {
      this.dataStorageService.getShoppingList();	  
  	} else {
      this.dataStorageService.getRecipes();
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
