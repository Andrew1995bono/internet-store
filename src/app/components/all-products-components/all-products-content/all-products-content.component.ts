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
  public rateValue: number[] = [];
  public filteredByFarmItems: ProductCard[] = [];
  public filteredByRateItems: ProductCard[] = [];


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

  getRateValue(event: MatCheckboxChange): void {
    this.products = this.sortByRate(event);
  }

  sortByFarm(event: MatCheckboxChange): any {
    if (event.checked) {
      this.farmValue.push(event.source.value);
      this.filteredByFarmItems = this.filtersService.products.value.filter((item: ProductCard) => {
        if (this.farmValue.includes(item.farm)) {
          return true;
        }
      });
      this.p = 1;
      return this.filteredByFarmItems;
    } else if (!event.checked) {
      this.farmValue = this.farmValue.filter((item: string) => {
        if (item === event.source.value) {
          return false;
        } else {
          return true;
        }
      });
      this.filteredByFarmItems = this.filtersService.products.value.filter((item: ProductCard) => {
        if (this.farmValue.includes(item.farm)) {
          return true;
        } else if (this.farmValue.length === 0) {
          return this.filteredByFarmItems;
        }
      });
      return this.filteredByFarmItems;
    }
  }

  sortByRate(event: MatCheckboxChange): any {
    if (event.checked) {
      this.rateValue.push(Number(event.source.value));
      this.filteredByRateItems = this.filtersService.products.value.filter((item: ProductCard) => {
        if (this.rateValue.includes(item.rating)) {
          return true;
        }
      });
      this.p = 1;
      return this.filteredByRateItems;
    } else if (!event.checked) {
      this.rateValue = this.rateValue.filter((item: number) => {
        if (item === Number(event.source.value)) {
          return false;
        } else {
          return true;
        }
      });
      this.filteredByRateItems = this.filtersService.products.value.filter((item: ProductCard) => {
        if (this.rateValue.includes(item.rating)) {
          return true;
        } else if (this.rateValue.length === 0) {
          return this.filteredByRateItems;
        }
      });
      return this.filteredByRateItems;
    }

  }

  showMoreProducts($event: MouseEvent): void {
    $event.preventDefault();
  }

}

