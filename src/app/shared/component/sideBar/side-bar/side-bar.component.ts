import { Component, OnInit, VERSION } from '@angular/core';
import { configNavBar } from 'src/app/config/configNavBar';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}
  mockApiConfigNavBar = configNavBar;

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
