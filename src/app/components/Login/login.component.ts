import { Component, OnInit } from "@angular/core";
import{FormGroup,Validators,FormControl, FormBuilder} from '@angular/forms';
import{Router, ActivatedRoute} from '@angular/router';
import{first} from 'rxjs/operators';

import{AuthenticationService} from 'src/app/services/authentication.service';



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})

export class LoginComponent  implements OnInit
{hide=true;
  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    private authenticationService:AuthenticationService,
    private myRoute:Router
  ){}
  GoBackToRegister(){
    this.myRoute.navigate(['/signUp'])
  }

  ngOnInit(){
    var emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    var mobpattern="^((\\+91-?)|0)?[0-9]{10}$";
    var combinepattern ="^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$";

    this.loginForm=this.formBuilder.group({
      emailId:['',Validators.required],
      password:['',Validators.required]
    });
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;
debugger;
     // stop here if form is invalid
     if (this.loginForm.invalid) {
      return;
  }
  this.loading=true;
  this.authenticationService.login(this.f.emailId.value,this.f.password.value)
    .pipe(first())
    .subscribe(
      data =>{
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error=error;
        this.loading=false;
      }
    );
  
  // userlogin:Login;
  // myform:FormGroup;
  // result:string;
  // res:string;
  // message:string;
  // submit=false;
  // submitted=false;
  // submitting=false;
  // emailormob:string;
  // returnUrl : string;
  // route:ActivatedRoute;
  // error='';

  // constructor(private authenticationService:AuthenticationService,
  //   private router:Router, formbuilder:FormBuilder)  { }

  //   ngOnInit()
  //   {
  //     var emailpattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  //     var mobpattern="^((\\+91-?)|0)?[0-9]{10}$";
  //     var combinepattern ="^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$";

  //     this.userlogin=new Login();
      

  //     this.myform=new FormGroup({emailId:new FormControl(null,[Validators.required,Validators.pattern(combinepattern),Validators.maxLength(10)]),password:new FormControl(null,[Validators.required,Validators.minLength(8)])});
      
   
  //   this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  // }
    

  //  get f(){return this.myform.controls;}

  //   public get emailId()
  //   {
  //     return this.myform.get("emailId");
  //   }
   
  //   public get password(){
  //     return this.myform.get("password");
  //   }

  // login()
  // {
  //   debugger;
  //   this.submitted=true;
 
  //   if(this.emailId.value!=null)
  //   {
  //     this.emailormob= this.emailId.value;
  //   }
    
  //      this.userlogin.EmailId=this.emailormob;
   
  //      this.userlogin.Password=this.password.value;
  //      this.authenticationService.login(this.userlogin.EmailId,this.userlogin.Password)
  //     // .subscribe(datat=> {this.router.navigate([this.returnUrl]);},
  //      error => {this.error=error}
  //     // );
    
  
    
}
  

}