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
  public farmValue: string[] = [];
  public rateValue: number[] = [];
  public categoryValue: string[] = [];
  public sortByValue: string[] = [];
  private filteredByFarmItems: ProductCard[] = [];
  private filteredByRateItems: ProductCard[] = [];
  private filteredByCategoryItems: ProductCard[] = [];

  constructor() {}

  public getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.push(event.source.value);
    this.allProducts.next(this.filter(event));
  }

  public getRateValue(event: MatCheckboxChange): void {
    this.rateValue.push(+event.source.value);
    this.allProducts.next(this.filter(event));
  }

  public getCategoryValue(event: MatSelectChange): void {
    this.categoryValue = [];
    this.categoryValue.push(event.value);
    if (this.categoryValue.length > 1) {
      this.categoryValue.shift();
    }
    this.allProducts.next(this.filter(event));
  }

  public getSortByValue(event: MatSelectChange): void {
    this.sortByValue.push(event.value);
    this.allProducts.next(this.filter(event));
  }

  public filter(event: any): ProductCard[] {
    const sortedByRate = this.filterByRate(event, this.products.value);
    const sortedByCategory = this.filterByCategory(event, sortedByRate);
    const sortedBySortBy = this.filterBySortBy(event, sortedByCategory);
    return this.filterByFarm(event, sortedBySortBy);
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

  private filterByRate(event: MatCheckboxChange, productsArr: ProductCard[]): ProductCard[] {
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

  public filterByCategory(event: MatSelectChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.source.value === 'All categories') {
      this.categoryValue.push('Fruits', 'Vegetables', 'Berries', 'Nuts');
      return productsArr;
    } else if (event.source.selected) {
      if (!this.categoryValue.length) {
        return productsArr;
      }
      return productsArr.filter((item: ProductCard) => this.categoryValue.includes(item.category));
    } else if (!event.source.selected) {
      this.categoryValue = this.categoryValue.filter((item: string) => item !== event.source.id);
      return productsArr.filter((item: ProductCard) => {
        if (this.categoryValue.includes(item.category)) {
          return true;
        } else if (this.categoryValue.length === 0) {
          return this.filteredByCategoryItems;
        }
      });
    }
    return [new ProductCard()];
  }

  private filterBySortBy(event: MatSelectChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.source.value === 'rating-high-low') {
      return productsArr.sort(function(a: ProductCard, b: ProductCard) {return b.rating - a.rating;});
    } else if (event.source.value === 'rating-low-high') {
      return productsArr.sort(function(a: ProductCard, b: ProductCard) {return a.rating - b.rating;});
    } else if (event.source.value === 'price-high-low') {
      return productsArr.sort(function(a: ProductCard, b: ProductCard) {return b.pricePromotional - a.pricePromotional;});
    } else if (event.source.value === 'price-low-high') {
      return productsArr.sort(function(a: ProductCard, b: ProductCard) {return a.pricePromotional - b.pricePromotional;});
    } else {
      return productsArr;
    }
    return [new ProductCard()];
  }
}

