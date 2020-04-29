export class Login{
    EmailId:string;
    Password:string;
    token?:string;
 
    constructor(emailId?,password?,token?){
        this.EmailId=emailId;
        this.Password=password;
        this.token=token;
    }

}