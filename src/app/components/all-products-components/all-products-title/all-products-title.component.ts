import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FiltersService } from '../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-all-products-title',
  templateUrl: './all-products-title.component.html',
  styleUrls: ['./all-products-title.component.css']
})

export class AllProductsTitleComponent implements OnInit {

  public itemsPerPage: BehaviorSubject<number>;

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.getItemsPerPage();
  }

  getItemsPerPage(): void {
    this.itemsPerPage = this.filtersService.itemsPerPage;
  }

}
