import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductCard } from '../../../interfaces/product-card';
import { FiltersService } from '../../../services/all-products/filters/filters.service';


@Component({
    selector: 'app-all-products-content',
    templateUrl: './all-products-content.component.html',
    styleUrls: ['./all-products-content.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
      '(document:click)': 'onClick()'
    }
  }
)
export class AllProductsContentComponent implements OnInit, OnDestroy {

  @Input() set products(products: ProductCard[]) {
    this.originProducts = products;
    this.filteredProducts = products;
  };

  @Input() productsQuantity: number;

  public originProducts: ProductCard[];
  public filteredProducts: ProductCard[];
  public p: number = this.filtersService.p;
  public itemsPerPage: number = 5;
  private unsubscribe$ = new Subject();
  public showFiller: boolean = false;
  public popupClass: boolean = false;
  public $event: KeyboardEvent;

  constructor(private filtersService: FiltersService) {

  }

  ngOnInit(): void {
    this.filtersService.allProducts.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      this.filteredProducts = data;
      this.p = 1;
    });
  }

  public showMoreProducts($event: MouseEvent): void {
    $event.preventDefault();
    this.itemsPerPage += 5;
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public sidenavPopup($event: MouseEvent) {
    $event.stopPropagation();
    this.popupClass = !this.popupClass;
  }

  public onClick() {
    this.popupClass = false;
  }
}

