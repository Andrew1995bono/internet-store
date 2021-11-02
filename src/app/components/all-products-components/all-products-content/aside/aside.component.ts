import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Output() farmValue = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  ngOnInit(): void {
  }

  getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.emit(event);
  }
}
