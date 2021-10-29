import {Component, Input, OnInit} from '@angular/core';
import {ProductCard} from "../../../../interfaces/product-card";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() products?: ProductCard[];

  constructor() {}

  ngOnInit(): void {
  }

}
