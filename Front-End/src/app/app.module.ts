import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { BrowserAnimationsModule } from 
'@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// Component
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavComponent } from './component/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { 
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
