import { DatePipe } from '@angular/common';

export class UserDetails{
    UserId:Int32Array;
    RoleId:Int32Array;
    Name:string;
    MobileNumber:string;
    DateOfBirth:string;
    Gender:string;
    EmailId:string;
    Password:string;
    Address1:string;
    Address2:string;
    City:string;
    State:string;
    Pincode:string;
    constructor(userId?,roleId?,name?,mobile?,dob?,gender?,email?,pass?,addr1?,addr2?,city?,state?,pin?){
        this.UserId=userId;
        this.RoleId=roleId;
        this.Name=name;
        this.MobileNumber=mobile;
        this.DateOfBirth=dob;
        this.Gender=gender;
        this.EmailId=email;
        this.Password=pass;
        
        this.Address1=addr1;
        this.Address2=addr2;
        this.City=city;
        this.State=state;
        this.Pincode=pin;
    }
}