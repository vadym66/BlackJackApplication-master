import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundRoutingModule } from './round-routing.module';
import { RoundGameComponent } from './round-game/round-game.component';
import { SharedModule } from '../shared/shared-module/shared.module';


@NgModule({
    imports: [
        CommonModule,
        RoundRoutingModule,
        SharedModule
    ],
    declarations: [RoundGameComponent]
})
export class RoundModule { }
