import { Component, OnInit } from "@angular/core";
import { WishList } from 'src/app/Model/WishListmodel';
import { WishListService } from 'src/app/services/wishList.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-wishList",
  templateUrl: "./wishList.component.html",
  styleUrls: ["./wishList.component.scss"]
})

export class WishListComponent implements OnInit {
 wishListProduct:WishList[];
  userId:string;
  constructor(private wishlistService:WishListService,private myRouter:Router) { 
this.wishlistService.getWishListData().subscribe((res=>{
  this.wishListProduct=res;
debugger;
  console.log(this.wishListProduct);
}));
  }
  debugger;
  addWishListItem(){
    this.myRouter.navigate(['/payment'])
  }

  ngOnInit() {

  }
}
