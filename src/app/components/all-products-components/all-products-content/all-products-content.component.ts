import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-all-products-content',
  templateUrl: './all-products-content.component.html',
  styleUrls: ['./all-products-content.component.css']
})
export class AllProductsContentComponent implements OnInit {

  @Input() products?: any;
  p: number = 3;
  allProductsQuantity: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
