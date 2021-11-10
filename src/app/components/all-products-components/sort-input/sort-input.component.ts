import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DropDownEnumInterface } from '../../../interfaces/dropdown-select';
import { SortByEnum } from '../../../interfaces/sort-by.enum';
import { FiltersService } from '../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SortInputComponent implements OnInit {

  public categories: DropDownEnumInterface[] = [
    { value: SortByEnum.DefaultSorting, viewValue: 'Default' },
    { value: SortByEnum.DescendingRating, viewValue: 'rating-high-low' },
    { value: SortByEnum.AscendingRating, viewValue: 'rating-low-high' },
    { value: SortByEnum.DescendingPrice, viewValue: 'price-high-low' },
    { value: SortByEnum.AscendingPrice, viewValue: 'price-low-high' }
  ];

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {

  }

  public getSortByValue(event: MatSelectChange): void {
    this.filtersService.getSortByValue(event);
  }
}

