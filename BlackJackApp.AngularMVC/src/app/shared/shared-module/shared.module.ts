import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonsModule
    ],
    declarations: [],
    exports: [FormsModule, ReactiveFormsModule, ButtonsModule]
})
export class SharedModule { }
