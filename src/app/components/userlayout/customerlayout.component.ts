import { Component,OnInit } from "@angular/core";
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Model/productmodel';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services';



declare var $:any;
@Component({
  selector: "app-customerlayout",
  templateUrl: "./customerlayout.component.html",
  styleUrls: ["./customerlayout.component.scss"]
})

export class CustomerlayoutComponent implements OnInit{
  events: string[] = [];
  opened: boolean;

  
 myControl=new FormControl();
 options:string[]=[
  'Money Plant (Green) - Gift Pack',
  'Air Purifier Plants In Ceramic Pot - Gift Pack ',
  'Blue Pearl Potted Plant Succulent Seeds',
  'Peace Lily, Spathiphyllum (Small) - Plant - Indoor Plants',
  'Bougainvillea Spectabilis',
  'Blue Lotus',
  'Top 4 plants',
  'Curtain Creeper',
  'Anthurium Red',
  'Priyathams Imported',
  'Lilies and Roses Bouquet',
  'Bunch of mix Flowers',
  'Archies Light Pink',
  'Red rose and daily Flowers Bouquet',
  'Bouquet of roses,lilies & daisy',
  'Happy Birthday Mixed Flowers',
  'Lily Bunch',
  'Floral HeartShape Arrangement',
  'Carnations & Orchids Bouquet',
  'Basket Mixed Flowers',
  'Boxwood Buxus',
  'Kochia Burning Bush',
  'Petunia Glorious',
  'Jasmine Plant',
  'Kunda,Downy Jasmine Plant',
  'Bonsai Bamboo Tree',
  'Red Maple',
  'Banya Tree',
  'Petunia Grandiflora',
  'Rosemary-Herb Seeds',
  '40 Pink Roses',
  'Heavenly White',
  'Assorted Fresh',
  'Dancing Flowers',
  'Subtle Bunch Lilies',
  'Archies Clolorful',
  'Bday Blooms',
  'Elegant White',
  'Enchanting Red',
  'Bouquet 21',
  'Decent Pink Mix',
  'Gerbera flower Bouquet',
  'Orchids',
  'Black Rose',
  'Hibiscus Plant',
  'Futaba Red',
  'Delightful Wishes',
  '10 Pinky',
  'Bouquet of Mix',
  'Beautiful Carnation',
  'White Carnation',
  'Pink Carnation',
  'Love-24',
  'Graceful Pink White',
  'Ravishing 7',
  'Compassionate Red',
  'Sizzling Red',
  'Mixed Roses N Lily Standards',
  'Delightful Flower',
  'White N Red Floral',
  'Set of 3 Foliage Plants',
  'Succlennts dish Garden in Borwn Ceramic Pot',
  'Chamaedorea Plant',
  'Black Pot of Ficus Plant',
 ];
 filteredOptions:Observable<string[]>;
  constructor(private myRouter:Router,private authenticationService:AuthenticationService) { 
   
   

  }
 

 ngOnInit(){
  this.filteredOptions=this.myControl.valueChanges
  .pipe(
    startWith(''),
    map(value=>this._filter(value))
  );
 } 
  
 private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}}
