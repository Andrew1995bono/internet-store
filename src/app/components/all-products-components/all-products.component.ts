import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../../interfaces/product-card';
import { AllProductsService } from '../../services/all-products.service';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})

export class AllProductsComponent implements OnInit {

  public products: ProductCard[] = [];
  public productsQuantity: number;

  constructor(
    private allProductService: AllProductsService,
    private filtersService: FiltersService
  ) { }

  ngOnInit(): void {
    this.allProductService.getProducts().subscribe(data => {
      this.products = data;
      this.filtersService.filteredProductsQuantity.next(data.length);
      this.filtersService.products.next(data);
      this.productsQuantity = data.length;
    });
  }

}
