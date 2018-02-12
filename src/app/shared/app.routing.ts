import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MarketerComponent } from '../marketers/marketers.component';
import { SupplierComponent } from '../suppliers/suppliers.component';
import { ConsumerOffersComponent } from '../consumeroffers/consumeroffers.component';
import { ConsumerOfferBundlesComponent } from '../consumerofferbundles/consumerofferbundles.component';
import { BundleOfferMappingsComponent } from '../bundleoffermappings/bundleoffermappings.component';

import { ErrorComponent } from '../error/error.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '' ,pathMatch:'full', redirectTo: 'Home'},
            { path: 'Home' , component: HomeComponent},
            { path: 'Marketers' , component: MarketerComponent},  
            { path: 'Suppliers' , component: SupplierComponent},  
            { path: 'ConsumerOffers' , component: ConsumerOffersComponent},  
            { path: 'OfferBundles' , component: ConsumerOfferBundlesComponent}, 
            { path: 'MatchedOffers' , component: BundleOfferMappingsComponent}, 
            { path: '**' , component: ErrorComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}