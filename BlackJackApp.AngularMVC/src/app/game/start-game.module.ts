import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartGameRoutingModule } from './start-game-routing.module';
import { StartGameComponent } from './start-game/start-game.component';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

import { SharedModule } from '../shared/shared-module/shared.module';
@NgModule({
    imports: [
        CommonModule,
        StartGameRoutingModule,
        InputsModule,
        DropDownsModule,
        SharedModule
    ],
    declarations: [StartGameComponent]
})
export class StartGameModule { }
