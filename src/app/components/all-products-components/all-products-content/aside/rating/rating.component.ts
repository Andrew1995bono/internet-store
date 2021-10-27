import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  public StarEnums = StarEnum;
  public stars:Array<number[]> = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 1], [0, 1, 1 ,1 ,1]];

  ngOnInit(): void {
  }

}
