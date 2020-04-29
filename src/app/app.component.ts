import { Component } from '@angular/core';
import { Login } from './Model/loginmodel';
import { Router } from '@angular/router';
import { AuthenticationService } from './services';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
currentUser:Login;
constructor(private router:Router,private authenticationService:AuthenticationService)

{

}


logout() {
  this.authenticationService.logout();
  this.router.navigate(['/frontpage']);
}

 
}
