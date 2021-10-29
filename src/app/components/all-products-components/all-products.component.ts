import { Component, OnInit } from '@angular/core';
import {AllProductsService} from "../../services/all-products/all-products.service";
import {ProductCard} from "../../interfaces/product-card";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public products: ProductCard[] = [];

  constructor(private allProductService: AllProductsService) { }

  ngOnInit(): void {
    this.allProductService.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }

}
