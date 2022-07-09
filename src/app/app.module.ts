import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardComponent } from './main-card/main-card.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PassWordInputComponent } from './pass-word-input/pass-word-input.component';
import { PassWordOptionsComponent } from './pass-word-options/pass-word-options.component';

@NgModule( {
  declarations: [
    AppComponent,
    MainCardComponent,
    MainContainerComponent,
    PassWordInputComponent,
    PassWordOptionsComponent,
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
