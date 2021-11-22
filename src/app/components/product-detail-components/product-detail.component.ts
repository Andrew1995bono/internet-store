import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../../interfaces/product-card';
import { AllProductsService } from '../../services/all-products/all-products.service';
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
  public products: ProductCard[] = [];

  constructor(
    private productDetailService: ProductDetailService,
    private route: ActivatedRoute,
    private filtersService: FiltersService,
    private allProductsService: AllProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.filtersService.products.value;
    this.allProductsService.getProducts().subscribe(products => {
      this.route.params.subscribe(data => {
        this.product = products.find(item => item.itemID === data.id) || new ProductCard();
        this.setRating(this.product);
        this.products = products;
      });
    });
  }

  private setRating(product: ProductCard): void {
    this.starArr.fill('../../assets/rate-star-filled.png', 0, (this.product.rating));
    this.starArr.fill('../../assets/rate-star.png', this.product.rating, 5);
  }


  public addToCart(): void {
    this.productDetailService.addToCartItems += 1;
  }
}
