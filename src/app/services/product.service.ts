import { Injectable } from "@angular/core";
import{HttpClient,HttpResponse} from '@angular/common/http';
import{Observable} from 'rxjs';
import {Product} from '../Model/productmodel';

/**
 * @description
 * @class
 */
@Injectable()
export class ProductService {
  data:any;
  constructor(private myHttp:HttpClient) {
    this.data=[];
  }
 getDatafromApi(){
    return this.myHttp.get("https://localhost:44357/api/Product/GetProduct");
  } 
  getProductData():Observable<any>
  {
    return this.getDatafromApi();
  }
}
