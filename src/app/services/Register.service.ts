import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { UserDetails } from 'src/app/Model/Usermodel';
/**
 * @description
 * @class
 */
@Injectable()
export class RegisterService {


  constructor(private http:HttpClient) {
  
  }

  addUserDetails(createUser:UserDetails):Observable<any>{
    
    console.log(createUser);
    
    return this.http.post("https://localhost:44357/api/Users/InsertUsers",createUser);
  }

}
