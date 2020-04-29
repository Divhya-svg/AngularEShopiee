import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../Model/loginmodel';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import{environment} from '../../environments/environment';

import{map} from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * @description
 * @class
 */
@Injectable({providedIn:'root'})
export class AuthenticationService {
private currentUserSubject:BehaviorSubject<Login>;
private currentUser:Observable<Login>;

  constructor(private http:HttpClient,private myRouter:Router) {
    this.currentUserSubject = new BehaviorSubject<Login>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    
  }
  debugger;
  public get currentUserValue():Login{
    return this.currentUserSubject.value;
  }
  login(emailId:string,password:string):Observable<any>{
    this.debugger;
    const httpParams=new HttpParams();
    httpParams.append('responseType','json'
    );
    var AUTH_API="https://localhost:44357";
    const  httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'}) };
    console.log(`${AUTH_API}/api/Login/${emailId}/${password}`,{params:httpParams});
    return this.http.get<any>(`${AUTH_API}/api/Login/${emailId}/${password}`,{params:httpParams})
    .pipe(map(user => {

      if(user){
        localStorage.setItem('currentUser',JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      console.log(user);
      return user;
    } ));
  }
    
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
     localStorage.removeItem('emailId');
     this.myRouter.navigate(['login'])
  }
}
