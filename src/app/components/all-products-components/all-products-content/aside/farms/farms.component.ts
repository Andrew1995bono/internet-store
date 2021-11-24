import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersService } from '../../../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class FarmsComponent implements OnInit {

  public farmNames: string[] = [];

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.getFarmsName();
  }

  public getFarmValue(event: MatCheckboxChange): void {
    this.filtersService.getFarmValue(event);
  }

  private getFarmsName(): void {
    this.filtersService.products.subscribe(data => {
      this.farmNames = (data.map(el => el.farm) as string[]).filter((item, i, arr) => arr.indexOf(item) === i);
    });
  }
}
