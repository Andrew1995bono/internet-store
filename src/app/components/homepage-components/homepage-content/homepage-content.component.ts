import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../services/breadcrumbs.service';


@Component({
  selector: 'app-homepage-content',
  templateUrl: './homepage-content.component.html',
  styleUrls: ['./homepage-content.component.scss']
})

export class HomepageContentComponent implements OnInit {

  constructor(private breadcrumbsService: BreadcrumbsService) { }

  ngOnInit(): void {
    this.breadcrumbsService.breadCrumbs = [{ label: 'Homepage /', routerLink: '**' }];
  }

}
