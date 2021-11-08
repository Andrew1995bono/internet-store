import { Injectable } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';
import { ProductCard } from '../../../interfaces/product-card';


@Injectable({
  providedIn: 'root'
})

export class FiltersService {

  public products: BehaviorSubject<ProductCard[]> = new BehaviorSubject([new ProductCard()]);
  public allProducts: BehaviorSubject<ProductCard[]> = new BehaviorSubject<ProductCard[]>([new ProductCard()]);
  public itemsPerPage: BehaviorSubject<number> = new BehaviorSubject(0);
  public p: number = 3;
  public categoryValue: string[] = [];
  public farmValue: string[] = [];
  public rateValue: number[] = [];
  private filteredByFarmItems: ProductCard[] = [];
  private filteredByRateItems: ProductCard[] = [];
  private filteredByCategoryProducts: ProductCard[] = [];

  constructor() {}

  public getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.push(event.source.value);
    this.allProducts.next(this.filter(event));
  }

  public getRateValue(event: MatCheckboxChange): void {
    this.rateValue.push(+event.source.value);
    this.allProducts.next(this.filter(event));
  }

  public filter(event: MatCheckboxChange): ProductCard[] {
    const sortedByRate = this.sortByRate(event, this.products.value);
    return this.filterByFarm(event, sortedByRate);
  }

  private filterByFarm(event: MatCheckboxChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.checked) {
      if (!this.farmValue.length) {
        return productsArr;
      }
      return productsArr.filter((item: ProductCard) => this.farmValue.includes(item.farm));
    } else if (!event.checked) {
      this.farmValue = this.farmValue.filter((item: string) => item !== event.source.value);

      return productsArr.filter((item: ProductCard) => {
        if (this.farmValue.includes(item.farm)) {
          return true;
        } else if (this.farmValue.length === 0) {
          return this.filteredByFarmItems;
        }
      });
    }
    return [new ProductCard()];
  }

  private sortByRate(event: MatCheckboxChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.checked) {
      if (!this.rateValue.length) {
        return productsArr;
      }
      return productsArr.filter((item: ProductCard) => this.rateValue.includes(item.rating));
    } else if (!event.checked) {
      this.rateValue = this.rateValue.filter((item: number) => item !== +event.source.value);
      this.filteredByRateItems = productsArr.filter((item: ProductCard) => {
        if (this.rateValue.includes(item.rating)) {
          return true;
        } else if (this.rateValue.length === 0) {
          return this.filteredByRateItems;
        }
      });
      return this.filteredByRateItems;
    }
    return [new ProductCard()];
  }

  public sortByCategories(event: MatSelectChange): ProductCard[] {
    this.categoryValue.push(event.value);
    this.filteredByCategoryProducts = this.products.value.filter((item: ProductCard) => this.categoryValue.includes(item.category));
    this.categoryValue.pop();
    return this.filteredByCategoryProducts;
  }

}
