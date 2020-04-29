import { Injectable } from "@angular/core";
import { Product } from 'src/app/Model/productmodel';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
/**
 * @description
 * @class
 */
@Injectable()
export class SearchService {
productlist:any

  constructor(private myHttp:HttpClient) {
    
  }
  GetSearchDataFromApi(productlist:Product){
    return this.myHttp.get("https://localhost:44366/api/SearchProduct/Search?Name="+productlist.Name);
  }
  getProductData():Observable<any>
  {
    return this.GetSearchDataFromApi(this.productlist);
  }
}
