import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoundGameComponent } from './round-game/round-game.component';

const routes: Routes = [
    {
        path: '',
        component: RoundGameComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoundRoutingModule { }
