import { Component, OnInit } from "@angular/core";
import { SearchService } from 'src/app/services/search/Search.service';
import { Product } from 'src/app/Model/productmodel';
//import { ProductComponent } from '../Product/product.component';
import{FormControl} from '@angular/forms';
import{map,startWith} from 'rxjs/operators';
import{Observable} from 'rxjs';

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})

export class SearchComponent implements OnInit {
public search:any='';
searchProduct:Product;
constructor(private searchService:SearchService){
  this.searchProduct=new Product();
}
  ngOnInit() {

  }
}
