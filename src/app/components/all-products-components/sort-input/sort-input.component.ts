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
    { value: SortByEnum.DefaultSorting, viewValue: 'Default sorting' },
    { value: SortByEnum.AscendingRating, viewValue: 'Rating: from high to low' },
    { value: SortByEnum.DescendingRating, viewValue: 'Rating: from low to high' },
    { value: SortByEnum.AscendingPrice, viewValue: 'Price: from high to low' },
    { value: SortByEnum.DescendingPrice, viewValue: 'Price: from low to high' }
  ];

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {

  }

  public getSortByValue(event: MatSelectChange): void {
    this.filtersService.getSortByValue(event);
  }
}

