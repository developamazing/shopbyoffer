import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';

import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { MarketerComponent } from './marketers/marketers.component';
import { SupplierComponent } from './suppliers/suppliers.component';

import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './shared/footer.component';
import { AppRoutingModule } from './shared/app.routing';

import { DataService } from './shared/services/dataService'
import { Configuration } from './app.constants';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        MarketerComponent,
        SupplierComponent,
        FooterComponent,
        ErrorComponent
    ],
    providers:[
        Configuration, DataService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
