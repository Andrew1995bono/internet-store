import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductCard} from "../../../interfaces/product-card";


@Component({
  selector: 'app-all-products-content',
  templateUrl: './all-products-content.component.html',
  styleUrls: ['./all-products-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductsContentComponent implements OnInit {

  @Input() products: ProductCard[] = [];
  @Input() productsQuantity?:number;
  public p: number = 3;
  public itemsPerPage: number = 5;
  public farmValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getFarmValue($event:any):void {
    this.farmValue = $event.source.value;
    console.log($event.source.value);
    this.sortByFarm();
  }

  sortByFarm():void {
    this.products = this.products.filter((item:ProductCard) => item.farm === this.farmValue);
    this.p = 1;
  }

}
