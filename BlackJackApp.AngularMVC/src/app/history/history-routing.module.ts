import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryGridComponent } from './history-grid/history-grid.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';


const routes: Routes = [
    {
        path: '',
        component: HistoryGridComponent
    },
    {
        path: 'details/:id',
        component: HistoryDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HistoryRoutingModule { }
