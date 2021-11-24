import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersService } from '../../../../../services/filters.service';

enum StarEnum {
  SolidStar = 0,
  EmptyStar = 1,
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class RatingComponent implements OnInit {

  constructor(private filtersService: FiltersService) { }

  public starEnums = StarEnum;
  public stars: Array<number[]> = [[0, 0, 0, 0, 0, 5], [0, 0, 0, 0, 1, 4], [0, 0, 0, 1, 1, 3], [0, 0, 1, 1, 1, 2], [0, 1, 1, 1, 1]];

  ngOnInit(): void {

  }

  public getCheckboxRate(event: MatCheckboxChange): void {
    this.filtersService.getRateValue(event);
  }

}
