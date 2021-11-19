import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductCard } from '../../interfaces/product-card';
import { FiltersService } from '../../services/all-products/filters/filters.service';
import { ProductDetailService } from '../../services/product-detail/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductDetailComponent implements OnInit {

  public starArr: string[] = ['', '', '', '', ''];
  public product = {} as ProductCard;
  private unsubscribe$ = new Subject();

  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private filtersService: FiltersService
  ) { }

  ngOnInit(): void {
    this.setRating(this.product);
    this.productDetailService.individualProduct.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(data => {
      this.product = data;
    });
    this.route.params.subscribe(data => {
      this.product = this.filtersService.products.value.find(item => item.itemID === data.id) || new ProductCard();
    });
  }


  private setRating(product: ProductCard): void {
    this.starArr.fill('../../assets/rate-star-filled.png', 0, (product.rating));
    this.starArr.fill('../../assets/rate-star.png', product.rating, 5);
  }

  private setIndividualProduct(): void {
    this.productDetailService.individualProduct.subscribe(data => this.product = data);
  }

  public ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
