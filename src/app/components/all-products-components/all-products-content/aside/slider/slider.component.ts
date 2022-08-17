import {ChangeContext, Options} from '@angular-slider/ngx-slider';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FiltersService} from '../../../../../services/filters.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SliderComponent implements OnInit {

  public value: number = 35;
  public highValue: number = 70;
  public options: Options = {
    floor: 0,
    ceil: 100
  };

  constructor(private filtersService: FiltersService) {
  }

  ngOnInit(): void {

  }

  public resetSliderValue(): void {
    this.value = 35;
    this.highValue = 70;
  }

  public getSliderValue(event: ChangeContext): void {
    // this.filtersService.highPrice = event.highValue;
    this.filtersService.minPrice = event.value;
    this.filtersService.getSliderValue(event);
  }
}
