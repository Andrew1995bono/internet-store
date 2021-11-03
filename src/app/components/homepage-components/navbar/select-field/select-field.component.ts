import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css']
})

export class SelectFieldComponent implements OnInit {

  public navList = ['Electronics', 'Food', 'Clothes', 'Skin and care', 'Toys', 'Special nutrition', 'Sports and outdoors', 'Books'];
  public arrowDown = '../../assets/arrow-down.png';

  constructor() { }

  ngOnInit(): void {

  }

}
