import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { SuppliersResponse } from './supplier.type';
import { iSupplier } from './supplier.type';

@Component({
    templateUrl: './suppliers.component.html',
    styleUrls: ['./suppliers.component.css']
})
export class SupplierComponent implements OnInit {
    public message: string;
    public allSuppliers: any[];

    constructor(
        private _dataService: DataService) {
        _dataService.restEntityName = "supplier";
        this.message = _dataService.statusMsg;
    }
    
    ngOnInit() {
        // this._slimLoadingBarService.start();
        this._dataService
            //.getAll<any[]>()
            .getData<SuppliersResponse>()
            .subscribe((data: SuppliersResponse) => { 
                            this.allSuppliers = data.resultList; 
                        },
                        error => () => {
                            alert('error');
                        },
                        () => {
                            // success
                            // alert("data" + this.allSuppliers);
                        });
            this.message = this._dataService.statusMsg;
   }
}