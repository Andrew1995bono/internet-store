import {Component, Input, OnInit} from '@angular/core';
import {FiltersService} from "../../../../../services/all-products/filters/filters.service";
import {ProductCard} from "../../../../../interfaces/product-card";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: string[] = ['Fruits', 'Vegetables', 'Berries', 'Nuts'];
  public fruitsQuantity?: number;
  public vegetableQuantity?: number;
  public berriesQuantity?: number;
  public nutsQuantity?: number;

  constructor(private filtersService: FiltersService) {
  }

  ngOnInit(): void {
    this.getItemsQuantity();
  }

  getItemsQuantity():void {
    this.filtersService.products.subscribe(data => {
      this.fruitsQuantity = data.filter((item:ProductCard) => item.category === "Fruits").length;
      this.vegetableQuantity = data.filter((item:ProductCard) => item.category === "Vegetables").length;
      this.berriesQuantity = data.filter((item:ProductCard) => item.category === "Berries").length;
      this.nutsQuantity = data.filter((item:ProductCard) => item.category === "Nuts").length;
    })
  }
}
