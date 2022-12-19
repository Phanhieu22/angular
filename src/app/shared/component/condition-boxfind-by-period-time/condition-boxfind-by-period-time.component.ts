import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-condition-boxfind-by-period-time',
  templateUrl: './condition-boxfind-by-period-time.component.html',
  styleUrls: ['./condition-boxfind-by-period-time.component.scss'],
})
export class ConditionBoxfindByPeriodTimeComponent implements OnInit {
  date = 12;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  constructor() {}

  ngOnInit(): void {}
}
