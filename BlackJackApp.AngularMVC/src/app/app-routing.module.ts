import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoundGuardService } from 'src/app/shared/services/round-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        loadChildren: './game/start-game.module#StartGameModule'
    },
    {
        path: 'history',
        loadChildren: './history/history.module#HistoryModule'
    },
    {
        path: 'game/:id',
        canActivate: [RoundGuardService],
        loadChildren: './round/round.module#RoundModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,
        { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
