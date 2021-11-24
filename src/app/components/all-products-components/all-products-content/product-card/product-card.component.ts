import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCard } from '../../../../interfaces/product-card';
import { BreadcrumbsService } from '../../../../services/breadcrumbs.service';
import { FiltersService } from '../../../../services/filters.service';
import { ProductDetailService } from '../../../../services/product-detail.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {

  @Input() set productData(product: ProductCard) {
    this.product = product;
  };

  public product = {} as ProductCard;
  public starArr: string[] = ['', '', '', '', ''];

  constructor(
    private filtersService: FiltersService,
    private productDetailService: ProductDetailService,
    private router: Router,
    private breadcrumbsService: BreadcrumbsService
  ) {}

  ngOnInit(): void {
    this.setRating(this.product);
  }

  private setRating(product: ProductCard): void {
    this.starArr.fill('../../assets/rate-star-filled.png', 0, (product.rating));
    this.starArr.fill('../../assets/rate-star.png', product.rating, 5);
  }

  public sendProductID(): void {
    this.router.navigate(['allProducts', this.product.itemID]);
  }

}

