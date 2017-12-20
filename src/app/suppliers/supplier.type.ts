
export interface SuppliersResponse {
  resultList: iSupplier[];
  paginator: string;
  responseCode: number;
  responseMessage: string; 
}

export interface iSupplier {
  id: string;
  domain: string;
  name: string;
  priority: number;
  suplierType: string; 
  currency: string;
  createdDate: string;
  createdBy: string;
  updatedBy: string;
  updatedDate: string;
  isActive:boolean;
  parentSupplierName:string;
}