import { ChangeContext } from '@angular-slider/ngx-slider';
import { Injectable } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject } from 'rxjs';
import { ProductCard } from '../../../interfaces/product-card';
import { SelectByEnum } from '../../../interfaces/select-by.enum';
import { SortByEnum } from '../../../interfaces/sort-by.enum';


@Injectable({
  providedIn: 'root'
})

export class FiltersService {

  public products: BehaviorSubject<ProductCard[]> = new BehaviorSubject([new ProductCard()]);
  public allProducts: BehaviorSubject<ProductCard[]> = new BehaviorSubject<ProductCard[]>([new ProductCard()]);
  public filteredProductsQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public itemsPerPage: BehaviorSubject<number> = new BehaviorSubject(0);
  public p: number = 3;
  private farmValue: string[] = [];
  private rateValue: number[] = [];
  private categoryValue: number = SelectByEnum.AllCategoriesSorting;
  private sortValue: number = SortByEnum.DefaultSorting;
  private filteredByFarmItems: ProductCard[] = [];
  private filteredByRateItems: ProductCard[] = [];
  public minPrice: number = 0;
  public highPrice: number = 100;

  constructor() {
  }


  public getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.push(event.source.value);
    this.allProducts.next(this.filter(event));
  }

  public getRateValue(event: MatCheckboxChange): void {
    this.rateValue.push(+event.source.value);
    this.allProducts.next(this.filter(event));
  }

  public getCategoryValue(event: MatSelectChange): void {
    this.categoryValue = event.source?.value;
    this.allProducts.next(this.filter(event));
  }

  public getSortByValue(event: MatSelectChange): void {
    this.checkTypeOfValue(event);
    this.allProducts.next(this.filter(event));
  }

  public getSliderValue(event: ChangeContext): void {
    this.allProducts.next(this.filter(event));
  }

  public filter(event: any): ProductCard[] {
    const filteredByRate = this.filterByRate(event, this.products.value);
    const filteredByCategory = this.filterByCategory(filteredByRate);
    const filteredByFarm = this.filterByFarm(event, filteredByCategory);
    const filteredByPrice = this.filterByPrice(filteredByFarm);
    return this.sortBy(filteredByPrice);
  }

  private filterByFarm(event: MatCheckboxChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.checked) {
      if (!this.farmValue.length) {
        return productsArr;
      }
      return productsArr.filter((item: ProductCard) => this.farmValue.includes(item.farm));
    } else if (!event.checked) {
      this.farmValue = this.farmValue.filter((item: string) => item !== event.source?.value);
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
      this.rateValue = this.rateValue.filter((item: number) => item !== +event.source?.value);
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

  private filterByCategory(productsArr: ProductCard[]): ProductCard[] {
    const selectAction: { [key: string]: () => ProductCard[] } = {
      [SelectByEnum.FruitsSorting]: () => productsArr.filter((item: ProductCard) => item.category === 'Fruits'),
      [SelectByEnum.VegetablesSorting]: () => productsArr.filter((item: ProductCard) => item.category === 'Vegetables'),
      [SelectByEnum.BerriesSorting]: () => productsArr.filter((item: ProductCard) => item.category === 'Berries'),
      [SelectByEnum.NutsSorting]: () => productsArr.filter((item: ProductCard) => item.category === 'Nuts'),
      [SelectByEnum.AllCategoriesSorting]: () => productsArr
    };
    return selectAction[this.categoryValue]();
  }

  private checkTypeOfValue(event: MatSelectChange): void {
    if (typeof event.value === 'number') {
      this.sortValue = event.source?.value;
    }
  }


  private sortBy(productsArr: ProductCard[]): ProductCard[] {
    const sortAction: { [key: string]: () => ProductCard[] } = {
      [SortByEnum.DescendingRating]: () => productsArr.sort((a: ProductCard, b: ProductCard) => b.rating - a.rating),
      [SortByEnum.AscendingRating]: () => productsArr.sort((a: ProductCard, b: ProductCard) => a.rating - b.rating),
      [SortByEnum.DescendingPrice]: () => productsArr.sort((a: ProductCard, b: ProductCard) => b.pricePromotional - a.pricePromotional),
      [SortByEnum.AscendingPrice]: () => productsArr.sort((a: ProductCard, b: ProductCard) => a.pricePromotional - b.pricePromotional),
      [SortByEnum.DefaultSorting]: () => productsArr
    };
    this.filteredProductsQuantity.next(productsArr.length);
    return sortAction[this.sortValue]();
  }

  private filterByPrice(productsArr: ProductCard[]): ProductCard[] {
    return productsArr.filter((item: ProductCard) => item.pricePromotional >= this.minPrice && item.pricePromotional <= this.highPrice);
  }

}
