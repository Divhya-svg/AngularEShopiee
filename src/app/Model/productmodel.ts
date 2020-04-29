import { DecimalPipe } from '@angular/common';

export class Product{
    ProductId:Int32Array;
    Name:string;
    Rating:any;
    ShortDescription:string;
    Image:string;
    MRP:any;
    DealPrice:any;
    ProductIsActive:boolean;
    constructor(pid?,name?,rating?,short?,image?,mrp?,deal?,active?){
        this.ProductId=pid;
        this.Name=name;
        this.Rating=rating;
        this.ShortDescription=short;
        this.Image=image;
        this.MRP=mrp;
        this.DealPrice=deal;
        this.ProductIsActive=active;
    }

}