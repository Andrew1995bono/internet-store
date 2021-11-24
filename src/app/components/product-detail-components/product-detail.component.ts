import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCard } from '../../interfaces/product-card';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.data.product.id;
    this.product = this.route.snapshot.data.product.products.find((p: ProductCard) => p.itemID === id);
    this.setRating(this.product.rating);
    this.products = this.route.snapshot.data.product.products;
  }

  private setRating(rating: number): void {
    this.starArr.fill('../../assets/rate-star-filled.png', 0, (this.product.rating));
    this.starArr.fill('../../assets/rate-star.png', this.product.rating, 5);
  }


  public addToCart(): void {
    this.productDetailService.addToCartItems += 1;
  }
}
