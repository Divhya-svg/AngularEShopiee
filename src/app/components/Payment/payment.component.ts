import { Component, OnInit ,Input,Output,EventEmitter, ɵSWITCH_COMPILE_COMPONENT__POST_R3__} from "@angular/core";
import { Validators ,FormControl,FormGroup, FormBuilder} from '@angular/forms';



@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
  providers:[
   
  ]
})

export class PaymentComponent implements OnInit {

  isLinear=false;
  firstFormGroup:FormGroup;
  secondFormGroup:FormGroup;
  thirdFormGroup:FormGroup;
  fourthFormGroup:FormGroup;
  constructor(private _formBuilder:FormBuilder) { 

  }

  ngOnInit() {
    this.firstFormGroup=this._formBuilder.group({
      addr1:['',Validators.required],
      addr2:['',Validators.required],
      fcity:['',Validators.required],
      fstate:['',Validators.required],
      fpin:['',Validators.required,Validators.maxLength(6)]
    });
    this.secondFormGroup=this._formBuilder.group({
      fpaymenttype:['',Validators.required],
      fcard:['',Validators.required,Validators.maxLength(16)],
      fcardname:['',Validators.required,Validators.maxLength(30)],
      fcvv:['',Validators.required,Validators.maxLength(3)],
      fdop:new FormControl(new Date()),
      fexpmonth:['',Validators.required,Validators.maxLength(2)],
      fexpYear:['',Validators.required,Validators.maxLength(4)]
    
    });
    this.thirdFormGroup=this._formBuilder.group({

    });
    this.fourthFormGroup=this._formBuilder.group({

    });
  }}