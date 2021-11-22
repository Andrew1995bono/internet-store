import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from '../../../../interfaces/product-card';
import { FiltersService } from '../../../../services/all-products/filters/filters.service';


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

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.setRating(this.product);
  }

  private setRating(product: ProductCard): void {
    this.starArr.fill('../../assets/rate-star-filled.png', 0, (product.rating));
    this.starArr.fill('../../assets/rate-star.png', product.rating, 5);
  }

}

