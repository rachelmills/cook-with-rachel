import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() pageToDisplay = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showRecipes() {
  	this.pageToDisplay.emit('recipes');
  }

  showShoppingList() {
  	this.pageToDisplay.emit('shopping-list');
  }
}
