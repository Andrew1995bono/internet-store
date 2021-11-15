import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DropDownCategoriesEnumInterface } from '../../../../interfaces/dropdown-select';
import { SelectByEnum } from '../../../../interfaces/select-by.enum';
import { FiltersService } from '../../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class InputFieldComponent implements OnInit {

  public foods: DropDownCategoriesEnumInterface[] = [
    { value: SelectByEnum.AllCategoriesSorting, viewValue: 'All categories' },
    { value: SelectByEnum.FruitsSorting, viewValue: 'Fruits' },
    { value: SelectByEnum.VegetablesSorting, viewValue: 'Vegetables' },
    { value: SelectByEnum.BerriesSorting, viewValue: 'Berries' },
    { value: SelectByEnum.NutsSorting, viewValue: 'Nuts' }
  ];

  constructor(private filtersService: FiltersService) { }

  ngOnInit(): void {

  }

  public getCategoryValue(event: MatSelectChange): void {
    this.filtersService.getCategoryValue(event);
  }

}
