import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';  // import everything from Firebase package under firebase alias

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private authService: AuthService) {}

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyBw9PB6ZoX17qemWj6WUOC4SOecgQYJN-E",
    	authDomain: "cook-with-rachel.firebaseapp.com"
		});	
	}

	ngAfterContentInit() {
		let localStorageObject = undefined;
		for (let key in localStorage) {			
			localStorageObject = JSON.parse(localStorage[key]);
		}
		if (localStorageObject) {
			const token = localStorageObject.stsTokenManager.accessToken;
			this.authService.setToken(token);
		}

	}
}
