import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryGridComponent } from './history-grid/history-grid.component';
import { HistoryDetailsComponent } from './history-details/history-details.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { SharedModule } from '../shared/shared-module/shared.module';


@NgModule({
    imports: [
        CommonModule,
        HistoryRoutingModule,
        GridModule,
        SharedModule
    ],
    declarations: [HistoryGridComponent, HistoryDetailsComponent]
})
export class HistoryModule { }
