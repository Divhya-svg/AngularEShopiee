import { Component, OnInit } from "@angular/core";
import {first,map} from 'rxjs/operators';
import { Login } from 'src/app/Model/loginmodel';
import { UserService } from 'src/app/services';
import { Product } from 'src/app/Model/productmodel';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})

export class HomepageComponent implements OnInit {
  data:Product[]
  getData:Product;
  res:string;
  constructor(private productService:ProductService,private myRouter:Router) { 
    this.getData=new Product();
    this.productService.getProductData().subscribe((res=>{
      this.data=res;
      console.log(res)
    }));
  }
  addProduct(){
    this.myRouter.navigate(['/payment'])
  }
  ngOnInit() {
   
   
  }
}
