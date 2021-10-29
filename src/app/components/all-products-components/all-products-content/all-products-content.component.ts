import {Component, Input, OnInit} from '@angular/core';
import {ProductCard} from "../../../interfaces/product-card";


@Component({
  selector: 'app-all-products-content',
  templateUrl: './all-products-content.component.html',
  styleUrls: ['./all-products-content.component.css']
})
export class AllProductsContentComponent implements OnInit {

  @Input() products?: any;
  p: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

}
