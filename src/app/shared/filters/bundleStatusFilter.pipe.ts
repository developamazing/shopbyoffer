import { Pipe, PipeTransform } from '@angular/core';
import { iConsumerOfferBundles } from '../../app.restservice.types';
@Pipe({
  name: 'bundleStatusFilter'
})
export class BundleStatusFilterPipe implements PipeTransform {
   transform(offerBundles: iConsumerOfferBundles[], bundleStatus: string): any[] {
    if(!offerBundles) return [];
    if(!bundleStatus) return offerBundles;
    //bundleStatus = bundleStatus.toLowerCase();
    if(bundleStatus == "All") return offerBundles;
     return offerBundles.filter( oBundle => {
     return oBundle.offerBundle.bundleStatusKey.status.toString().includes(bundleStatus);
 });
}

}