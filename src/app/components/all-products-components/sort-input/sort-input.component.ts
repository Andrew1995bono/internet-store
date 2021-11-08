import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DropdownSelect } from '../../../interfaces/dropdown-select';
import { FiltersService } from '../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SortInputComponent implements OnInit {

  public categories: DropdownSelect[] = [
    { value: 'rating', viewValue: 'Rating: from high to low' },
    { value: 'low-high', viewValue: 'Price: from low to high' },
    { value: 'high-low', viewValue: 'Price: from high to low' }

  ];

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {

  }

  public getSortByValue(event: MatSelectChange): void {
    this.filtersService.getSortByValue(event);
  }
}

