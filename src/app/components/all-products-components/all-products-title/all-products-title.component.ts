import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../../../services/filters.service';

@Component({
  selector: 'app-all-products-title',
  templateUrl: './all-products-title.component.html',
  styleUrls: ['./all-products-title.component.scss']
})

export class AllProductsTitleComponent implements OnInit {

  public filteredProductsQuantity: number;


  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.filtersService.filteredProductsQuantity.subscribe(data => {
      this.filteredProductsQuantity = data;
      // debugger
    });
  }


}
