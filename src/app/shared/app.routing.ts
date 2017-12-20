import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MarketerComponent } from '../marketers/marketers.component';
import { SupplierComponent } from '../suppliers/suppliers.component';
import { ErrorComponent } from '../error/error.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'Home' , component: HomeComponent},
            { path: 'Marketers' , component: MarketerComponent},  
            { path: 'Suppliers' , component: SupplierComponent},  
            { path: '**' , component: ErrorComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}