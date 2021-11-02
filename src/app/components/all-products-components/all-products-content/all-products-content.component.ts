import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductCard } from '../../../interfaces/product-card';


@Component({
  selector: 'app-all-products-content',
  templateUrl: './all-products-content.component.html',
  styleUrls: ['./all-products-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductsContentComponent implements OnInit {

  @Input() products: ProductCard[] = [];
  @Input() productsQuantity: number;
  public p: number = 3;
  public itemsPerPage: number = 5;
  public farmValue: string = '';
  public filteredItems: ProductCard[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  getFarmValue(event: MatCheckboxChange): void {
    this.farmValue = event.source.value;
    this.filteredItems = this.products;
    this.sortByFarm(event);
  }

  sortByFarm($event: MatCheckboxChange): void {

    this.filteredItems = this.products.filter((item: ProductCard) => {
      if (item.farm === this.farmValue && $event.checked) {
        return true;
      }
    });
    this.p = 1;
  }

}


