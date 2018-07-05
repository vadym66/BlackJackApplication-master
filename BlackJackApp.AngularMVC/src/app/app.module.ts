import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoundComponent } from './round/round.component';


@NgModule({
  imports: [BrowserModule,
    FormsModule],

  declarations: [AppComponent,
    RoundComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
