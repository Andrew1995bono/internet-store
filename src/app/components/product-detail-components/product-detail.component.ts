import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../interfaces/product-card';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public starArr: string[] = ['', '', '', '', ''];
  public product = {} as ProductCard;

  constructor() { }

  ngOnInit(): void {
    this.setRating(this.product);
  }

  private setRating(product: ProductCard): void {
    this.starArr.fill('../../assets/rate-star-filled.png', 0, (product.rating));
    this.starArr.fill('../../assets/rate-star.png', product.rating, 5);
  }

}
