import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DropDownCategoriesEnumInterface } from '../../../../interfaces/dropdown-select';
import { SelectByEnum } from '../../../../interfaces/select-by.enum';
import { FiltersService } from '../../../../services/all-products/filters/filters.service';
import { ProductDetailService } from '../../../../services/product-detail/product-detail.service';

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

  public some: number = this.productDetailService.addToCartItems;

  constructor(private filtersService: FiltersService, public productDetailService: ProductDetailService) { }

  ngOnInit(): void {
    console.log(this.some);
  }

  public getCategoryValue(event: MatSelectChange): void {
    this.filtersService.getCategoryValue(event);
  }

}
