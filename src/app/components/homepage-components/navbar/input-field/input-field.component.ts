import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropdownSelect } from '../../../../interfaces/dropdown-select';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class InputFieldComponent implements OnInit {

  public foods: DropdownSelect[] = [
    { value: 'fruits', viewValue: 'Fruits' },
    { value: 'vegetables', viewValue: 'Vegetables' },
    { value: 'berries', viewValue: 'Berries' },
    { value: 'nuts', viewValue: 'Nuts' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
