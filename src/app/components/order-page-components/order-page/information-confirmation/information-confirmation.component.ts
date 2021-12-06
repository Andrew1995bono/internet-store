import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-information-confirmation',
  templateUrl: './information-confirmation.component.html',
  styleUrls: ['./information-confirmation.component.scss']
})

export class InformationConfirmationComponent implements OnInit {

  @Input() userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
