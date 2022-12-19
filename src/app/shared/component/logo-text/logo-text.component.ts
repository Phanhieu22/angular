import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-text',
  templateUrl: './logo-text.component.html',
  styleUrls: ['./logo-text.component.scss'],
})
export class LogoTextComponent implements OnInit, AfterContentInit {
  @Input() width: number = 300;

  constructor() {}
  navStyle: string;
  ngAfterContentInit(): void {
    this.navStyle = `width: ${this.width}px;`;
  }

  ngOnInit(): void {}
}
