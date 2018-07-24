import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { AppComponent } from './app.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { StartGame } from './game/start-game/start-game.component';
import { HistoryGrid } from './history/history-grid/history-grid.component';
import { RoundGame } from './game/round-game/round-game.component';

@NgModule({
  declarations: [
      AppComponent,
      StartGame,
      HistoryGrid
  ],
  imports: [
      BrowserModule,
      ButtonsModule,
      InputsModule,
      DropDownsModule,
      RouterModule.forRoot([
          { path: 'start', component: StartGame },
          { path: 'history', component: HistoryGrid },
          { path: 'round/:id', component: RoundGame },
          { path: '**', redirectTo: 'start', pathMatch: 'full' }
      ])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
