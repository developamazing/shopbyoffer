
export interface MarketersResponse {
  resultList: iMarketer[];
  paginator: string;
  responseCode: number;
  responseMessage: string; 
}

export interface iMarketer {
  id: string;
  domain: string;
  name: string;
  marketertype: string; 
  currency: string;
  description: string;
  createdDate: string;
  createdBy: string;
  updatedBy: string;
  updatedDate: string;
  active:boolean;
}