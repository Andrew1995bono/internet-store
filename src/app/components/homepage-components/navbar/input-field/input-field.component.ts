import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DropdownSelect } from '../../../../interfaces/dropdown-select';
import { FiltersService } from '../../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class InputFieldComponent implements OnInit {

  public foods: DropdownSelect[] = [
    { value: 'Fruits', viewValue: 'Fruits' },
    { value: 'Vegetables', viewValue: 'Vegetables' },
    { value: 'Berries', viewValue: 'Berries' },
    { value: 'Nuts', viewValue: 'Nuts' }
  ];

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {

  }

  public getSelectAllCategories(event: MatSelectChange): void {
    this.filtersService.sortByCategories(event.value);
  }

}
