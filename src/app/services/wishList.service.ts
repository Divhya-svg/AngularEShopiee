import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * @description
 * @class
 */
@Injectable()
export class WishListService {
  wishListProduct:any;
userId:string;
  constructor(private http:HttpClient) {
    this.wishListProduct=[];
    
  }
  debugger;
  getWishListDataFromApi(){
   this.userId=localStorage.getItem('userId')
    return this.http.get("https://localhost:44357/api/WishList/GetWishList?UserId="+this.userId);
  }
  getWishListData():Observable<any>{
    return this.getWishListDataFromApi();
  }

}
