import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { ConsumerOfferBundleResponse } from '../app.restservice.types';
import { iConsumerOfferBundles } from '../app.restservice.types';

@Component({
    templateUrl: './consumerofferbundles.component.html',
    styleUrls: ['../app.styles.css']
})
export class ConsumerOfferBundlesComponent implements OnInit {
    public message: string;
    public allConsumerOfferBundles: any[];
    public rulesResults: string;
    public today: number = Date.now();
    public selectedStatus: string;
    public pageSizeValue: any;

    constructor(
        private _dataService: DataService) {
        _dataService.restEntityName = "consumerOfferBundle";
        this.message = _dataService.statusMsg;
        this.selectedStatus = "All"; 
        this.pageSizeValue =10;
    }

    ApplyRules()
    {
        this._dataService.post("/executeOfferRules")
        .subscribe((data: string) => { this.rulesResults = data; 
        },
        error => () => {
            this.rulesResults = 'Failed to apply rules...';
            alert('error');
        },
        () => {
            this.rulesResults = 'Rules applied successfuly';
        });
        this.message = this._dataService.statusMsg;
    }
    
    ngOnInit() {
        // this._slimLoadingBarService.start();
        this._dataService
            //.getAll<any[]>()
            .getDataByQueryString<iConsumerOfferBundles[]>("/all")
            .subscribe((data: iConsumerOfferBundles[]) => { 
                            this.allConsumerOfferBundles = data; //alert(data.responseMessage);
                        },
                        error => () => {
                            alert('error');
                        },
                        () => {
                            // success
                            // alert("data:" + this.allConsumerOfferBundles);
                        });
            this.message = this._dataService.statusMsg;
   }
}