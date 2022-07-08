import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { MainContainerComponent } from './main-container/main-container.component';

@NgModule( {
  declarations: [
    AppComponent,
    MainCardComponent,
    MainContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
