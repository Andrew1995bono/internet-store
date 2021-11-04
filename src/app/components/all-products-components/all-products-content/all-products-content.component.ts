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
    this.products = this.sortByFarm(event, this.filtersService.products.value);
  }

  public getRateValue(event: MatCheckboxChange): void {
    this.products = this.sortByRate(event, this.filtersService.products.value);
  }

  private sortByFarm(event: MatCheckboxChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.checked) {
      this.farmValue.push(event.source.value);
      this.filteredByFarmItems = productsArr.filter((item: ProductCard) => {
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
      this.filteredByFarmItems = productsArr.filter((item: ProductCard) => {
        if (this.farmValue.includes(item.farm)) {
          return true;
        } else if (this.farmValue.length === 0) {
          return this.filteredByFarmItems;
        }
      });
      return this.filteredByFarmItems;
    }
    return [new ProductCard()];
  }

  private sortByRate(event: MatCheckboxChange, productsArr: ProductCard[]): ProductCard[] {
    if (event.checked) {
      this.rateValue.push(Number(event.source.value));
      this.filteredByRateItems = productsArr.filter((item: ProductCard) => {
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

