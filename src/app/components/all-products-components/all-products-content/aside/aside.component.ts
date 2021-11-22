import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {

  @Output() farmValue = new EventEmitter<MatCheckboxChange>();
  @Output() rateValue = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  ngOnInit(): void {

  }

  public getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.emit(event);
  }

  public getRateValue(event: MatCheckboxChange): void {
    this.rateValue.emit(event);
  }

}
