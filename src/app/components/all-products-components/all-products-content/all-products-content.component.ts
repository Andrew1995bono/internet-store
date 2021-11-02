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
  public farmValue: string[] = [];
  public filteredItems: ProductCard[] = [];


  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.sendItemsPerPage();
  }


  sendItemsPerPage(): void {
    this.filtersService.itemsPerPage.next(this.itemsPerPage);
  }

  getFarmValue(event: MatCheckboxChange): void {
    this.products = this.sortByFarm(event);
  }

  sortByFarm(event: MatCheckboxChange): any {
    if (event.checked) {
      this.farmValue.push(event.source.value);
      this.filteredItems = this.filtersService.products.value.filter((item: ProductCard) => {
        if (this.farmValue.includes(item.farm)) {
          return true;
        }
      });
      this.p = 1;
      return this.filteredItems;
    } else if (!event.checked) {
      this.farmValue = this.farmValue.filter((item: string) => {
        if (item === event.source.value) {
          return false;
        } else {
          return true;
        }
      });
      this.filteredItems = this.filtersService.products.value.filter((item: ProductCard) => {
        if (this.farmValue.includes(item.farm)) {
          return true;
        } else if (this.farmValue.length === 0) {
          return this.filteredItems;
        }
      });
      return this.filteredItems;
    }
  }
}

