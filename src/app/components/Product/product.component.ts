import { Component, OnInit } from "@angular/core";
import { Product } from 'src/app/Model/productmodel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})

export class ProductComponent implements OnInit {
data:Product[]
getData:Product;
res:string;

  constructor(private productService:ProductService) { 
 
    this.getData=new Product();
    this.productService.getProductData().subscribe((res=>{
      this.data=res;
      console.log(res)
    }));
  }
   
    


  ngOnInit() {
  }
  
 
  
  
}
