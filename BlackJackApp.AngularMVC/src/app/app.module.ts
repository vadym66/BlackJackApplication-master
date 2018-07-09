import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import { StartGame } from '../app/start-game/start-game.component';

@NgModule({
  declarations: [
      AppComponent,
      StartGame
  ],
  imports: [
      BrowserModule,
      ButtonsModule,
      InputsModule,
      BrowserAnimationsModule,
      DropDownsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
