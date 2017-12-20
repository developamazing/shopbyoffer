import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { MarketersResponse } from './marketer.type';
import { iMarketer } from './marketer.type';

@Component({
    templateUrl: './marketers.component.html',
    styleUrls: ['./marketers.component.css']
})
export class MarketerComponent implements OnInit {
    public message: string;
    public allMarketers: any[];

    constructor(
        private _dataService: DataService) {
        _dataService.restEntityName = "marketer";
        this.message = _dataService.statusMsg;
    }
    
    ngOnInit() {
        // this._slimLoadingBarService.start();
        this._dataService
            //.getAll<any[]>()
            .getData<MarketersResponse>()
            .subscribe((data: MarketersResponse) => { this.allMarketers = data.resultList; //alert(data.responseMessage);
                        },
                        error => () => {
                            alert('error');
                        },
                        () => {
                            // success
                            // alert("data" + this.allMarketers);
                        });
            this.message = this._dataService.statusMsg;
   }
}