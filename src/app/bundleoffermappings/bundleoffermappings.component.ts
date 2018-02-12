import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { BundleOfferMappingsResponse } from '../app.restservice.types';
import { iBundleOfferMapping } from '../app.restservice.types';

@Component({
    templateUrl: './bundleoffermappings.component.html',
    styleUrls: ['../app.styles.css']
})
export class BundleOfferMappingsComponent implements OnInit {
    public message: string;
    public allBundleOfferMappings: iBundleOfferMapping[];
    public rulesResults: string;
    public today: number = Date.now();
    public selectedStatus: string;
    public pageSizeValue: any;

    constructor(
        private _dataService: DataService) {
        _dataService.restEntityName = "bundleOfferMapping";
        this.message = _dataService.statusMsg;
        this.selectedStatus = "All"; 
        this.pageSizeValue =10;
    }

    ngOnInit() {
        // this._slimLoadingBarService.start();
        this._dataService
            //.getAll<any[]>()
            .getDataByQueryString<iBundleOfferMapping[]>("/all")
            .subscribe((data: iBundleOfferMapping[]) => { 
                            this.allBundleOfferMappings = data; //alert(data.responseMessage);
                        },
                        error => () => {
                            alert('error');
                        },
                        () => {
                            // success
                            // alert("data:" + this.allBundleOfferMappings);
                        });
            this.message = this._dataService.statusMsg;
   }
}