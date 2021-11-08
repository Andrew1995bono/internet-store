import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropdownSelect } from '../../../interfaces/dropdown-select';

@Component({
  selector: 'app-sort-input',
  templateUrl: './sort-input.component.html',
  styleUrls: ['./sort-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SortInputComponent implements OnInit {

  public categories: DropdownSelect[] = [
    { value: 'rating', viewValue: 'Rating: from high to low' },
    { value: 'vegetables-1', viewValue: 'Price: from low to high' },
    { value: 'berries-2', viewValue: 'Price: from high to low' }

  ];

  constructor() { }

  ngOnInit(): void {

  }

}

