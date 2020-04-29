import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Login } from '../Model/loginmodel';

/**
 * @description
 * @class
 */
@Injectable({providedIn:'root'})
export class UserService {

  constructor(private http:HttpClient) {
    
    
  }
  getAll() {
    //config.apiUrl
    const url="http://localhost:44357";
   return this.http.get<Login[]>(`${url}/api/Login`);
}

}
