import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SliderComponent implements OnInit {

  public value: number = 40;
  public highValue: number = 60;
  public options: Options = {
    floor: 0,
    ceil: 100
  };

  constructor() { }

  ngOnInit(): void {

  }

  public resetSliderValue($event: MouseEvent): void {
    this.value = 40;
    this.highValue = 60;
  }

}
