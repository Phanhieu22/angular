import { Component, OnInit } from '@angular/core';
import { car } from 'src/app/model/car';
import { ToggleService } from 'src/app/service/toggle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public toggle: ToggleService) {}

  ngOnInit(): void {}
}
