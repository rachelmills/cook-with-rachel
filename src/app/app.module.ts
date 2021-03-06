import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing-module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, // BrowserModule contains CommonModule
    AppRoutingModule, 
    HttpModule, 
    SharedModule,
    AuthModule,
    CoreModule
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
