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
  private farmValue: string[] = [];
  private rateValue: number[] = [];
  private filteredByFarmItems: ProductCard[] = [];
  private filteredByRateItems: ProductCard[] = [];


  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.sendItemsPerPage();
  }

  private sendItemsPerPage(): void {
    this.filtersService.itemsPerPage.next(this.itemsPerPage);
  }

  public getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.push(event.source.value);
    this.products = this.filter(event);
  }

  public getRateValue(event: MatCheckboxChange): void {
    this.rateValue.push(+event.source.value);
    this.products = this.filter(event);
  }

  private filter(event: MatCheckboxChange): ProductCard[] {
    const sortedByRate = this.sortByRate(event, this.filtersService.products.value);
    return this.sortByFarm(event, sortedByRate);
  }


  private sortByFarm(event: MatCheckboxChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.checked) {
      if (!this.farmValue.length) {
        return productsArr;
      }
      this.p = 1;
      return productsArr.filter((item: ProductCard) => this.farmValue.includes(item.farm));
    } else if (!event.checked) {
      this.p = 1;
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
      this.p = 1;
      if (!this.rateValue.length) {
        return productsArr;
      }
      return productsArr.filter((item: ProductCard) => this.rateValue.includes(item.rating));
    } else if (!event.checked) {
      this.p = 1;
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

  public showMoreProducts($event: MouseEvent): void {
    $event.preventDefault();
    this.itemsPerPage += 5;
    this.filtersService.itemsPerPage.next(this.itemsPerPage);
    this.p = 1;
  }
}

