import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public rowTags: string[] = [
    'Beans', 'Carrots', 'Apples', 'Garlic',
    'Mushrooms', 'Tomatoes', 'Chilli peppers',
    'Broccoli', 'Watermelons', 'Oranges',
    'Bananas', 'Grapes', 'Cherries', 'Meat', 'Seo tag',
    'Fish', 'Seo tag', 'Fresh food', 'Lemons'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
