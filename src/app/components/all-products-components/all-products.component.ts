import {Component, Input, OnInit} from '@angular/core';
import {AllProductsService} from "../../services/all-products/all-products.service";
import {ProductCard} from "../../interfaces/product-card";
import {FiltersService} from "../../services/all-products/filters/filters.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  public products: ProductCard[] = [];
  public productsQuantity?:number;

  constructor(private allProductService: AllProductsService, private filtersService: FiltersService) {

  }

  ngOnInit(): void {
    this.allProductService.getProducts().subscribe(data => {
      this.products = data;
      this.productsQuantity = data.length;
      this.filtersService.products.next(data);
    });
  }
}
