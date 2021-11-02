import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductCard} from "../../../interfaces/product-card";


@Component({
  selector: 'app-all-products-content',
  templateUrl: './all-products-content.component.html',
  styleUrls: ['./all-products-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductsContentComponent implements OnInit {
<<<<<<< HEAD

  @Input() products: ProductCard[] = [];
  public p: number = 3;
=======
  @Input() products: ProductCard[] = [];
  @Input() productsQuantity?:number;
  p: number = 3;

>>>>>>> footer
  constructor() { }

  ngOnInit(): void {

  }

}
