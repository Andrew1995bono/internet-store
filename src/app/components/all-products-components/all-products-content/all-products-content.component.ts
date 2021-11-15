import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductCard } from '../../../interfaces/product-card';
import { FiltersService } from '../../../services/all-products/filters/filters.service';


@Component({
  selector: 'app-all-products-content',
  templateUrl: './all-products-content.component.html',
  styleUrls: ['./all-products-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
<<<<<<< HEAD
export class AllProductsContentComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD

  @Input() products: ProductCard[] = [];
  public p: number = 3;
=======
=======

>>>>>>> product-rating
  @Input() products: ProductCard[] = [];
=======
export class AllProductsContentComponent implements OnInit, OnDestroy {

  @Input() set products(products: ProductCard[]) {
    this.originProducts = products;
    this.filteredProducts = products;
  };

>>>>>>> select-filters
  @Input() productsQuantity: number;

  public originProducts: ProductCard[];
  public filteredProducts: ProductCard[];
  public p: number = this.filtersService.p;
  public itemsPerPage: number = 5;
  private unsubscribe$ = new Subject();

<<<<<<< HEAD
>>>>>>> footer
  constructor() { }

  ngOnInit(): void {

=======
  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.filtersService.allProducts.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      this.filteredProducts = data;
      this.p = 1;
<<<<<<< HEAD
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
>>>>>>> product-rating
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
=======
    });
>>>>>>> select-filters
  }

  public showMoreProducts($event: MouseEvent): void {
    $event.preventDefault();
    this.itemsPerPage += 5;
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}

