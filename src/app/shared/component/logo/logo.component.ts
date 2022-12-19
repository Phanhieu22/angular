import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  @Input() height: number = 82;
  @Input() width: number = 82;
  navStyle = `height: ${this.height}px;width: ${this.width}px;`;
  constructor() {}

  ngOnInit(): void {}
}
