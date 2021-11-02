import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProductCard } from '../../../interfaces/product-card';
import { FiltersService } from '../../../services/all-products/filters/filters.service';


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


  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
  }

  getFarmValue(event: MatCheckboxChange): void {
    this.farmValue = event.source.value;
    this.filteredItems = this.products;
    this.products = this.sortByFarm(event);
  }

  sortByFarm(event: MatCheckboxChange): any {
    if (event.checked) {
      this.filteredItems = this.products.filter((item: ProductCard) => {
        if (item.farm === this.farmValue && event.checked) {
          return true;
        }
      });
      this.products = this.filteredItems;
      this.p = 1;
      return this.products;
    } else if (!event.checked) {
      return this.products = this.filtersService.products.value;
    }
  }
}

