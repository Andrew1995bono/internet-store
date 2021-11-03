import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

enum StarEnum {
  SolidStar = 0,
  EmptyStar = 1,
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Output() rateValue = new EventEmitter<MatCheckboxChange>();

  constructor() { }

  public StarEnums = StarEnum;
  public stars: Array<number[]> = [[0, 0, 0, 0, 0, 5], [0, 0, 0, 0, 1, 4], [0, 0, 0, 1, 1, 3], [0, 0, 1, 1, 1, 2], [0, 1, 1, 1, 1]];
  public values: number[] = [5, 4, 3, 2, 1];

  ngOnInit(): void {
  }

  getCheckboxRate(event: MatCheckboxChange): void {
    this.rateValue.emit(event);
  }

}
