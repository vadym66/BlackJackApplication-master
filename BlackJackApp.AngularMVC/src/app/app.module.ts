import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { HeaderComponent } from './header.component';
import { RoundGuardService } from './shared/services/round-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        GridModule
    ],
    providers: [ RoundGuardService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
