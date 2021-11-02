import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersService } from '../../../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  public farmNames: string[] = [];
  @Output() farmValue = new EventEmitter<MatCheckboxChange>();

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.getFarmsName();
  }

  getFarmsName(): void {
    this.filtersService.products.subscribe(data => {
      this.farmNames = (data.map(el => el.farm) as string[]).filter((item, i, arr) => arr.indexOf(item) === i);
    });
  }

  getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.emit(event);
  }

}
