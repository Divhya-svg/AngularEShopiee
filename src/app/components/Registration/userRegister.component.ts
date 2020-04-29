import { Component, OnInit,Input,Output,EventEmitter } from "@angular/core";
import{FormGroup,FormControl,Validators} from '@angular/forms';
import { UserDetails } from 'src/app/Model/Usermodel';
import { RegisterService } from 'src/app/services/Register.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: "app-userRegister",
  templateUrl: "./userRegister.component.html",
  styleUrls: ["./userRegister.component.scss"]
})

export class UserRegisterComponent implements OnInit {
  hide=true;
  createUser:UserDetails;

  
  public userform:FormGroup;
  
 
  

  constructor(private registerService:RegisterService,private toaster:ToastrService,private myRouter:Router) { 
    
this.createUser=new UserDetails();
  }
  onSubmit(){
   
    console.log(this.createUser.RoleId)
    console.log(this.createUser.Name)
    console.log(this.createUser.MobileNumber)
    console.log(this.createUser.DateOfBirth)
    console.log(this.createUser.Gender)
    console.log(this.createUser.EmailId)
    console.log(this.createUser.Password)
    

    this.registerService.addUserDetails(this.createUser).subscribe((res=>
      {
       if(res== true)
       {
         this.toaster.success("Welcome")

       }
       else{
         this.toaster.warning("Please Try Again!")
       }
        this.myRouter.navigate(['/login'])
      }))
   //  localStorage.setItem("userId",String(this.createUser.UserId))
  }

  ngOnInit() {
this.userform=new FormGroup({
frole:new FormControl('',Validators.required),
fname:new FormControl('',[Validators.required,Validators.maxLength(30)]),
fmobile:new FormControl('',[Validators.required,Validators.maxLength(15)]),
fdob:new FormControl(new Date()),
fgender:new FormControl('',Validators.required),
femail:new FormControl('',[Validators.required,Validators.minLength(8)]),
fpass:new FormControl('',[Validators.required,Validators.minLength(8)]),

})
  }

 
  

}
