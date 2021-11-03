import { Component, Input, OnInit } from '@angular/core';
import { ProductCard } from '../../../../interfaces/product-card';
import { FiltersService } from '../../../../services/all-products/filters/filters.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() set productData(product: ProductCard) {
    this.product = product;
  };

  public product = {} as ProductCard;

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
  }

}
