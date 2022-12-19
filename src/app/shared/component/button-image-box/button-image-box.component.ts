import { Component, Input, OnInit } from '@angular/core';
import { buttonModel } from 'src/app/model/buttonModel';

@Component({
  selector: 'app-button-image-box',
  templateUrl: './button-image-box.component.html',
  styleUrls: ['./button-image-box.component.scss'],
})
export class ButtonImageBoxComponent implements OnInit, buttonModel {
  constructor() {}
  // text, icon, width, height, typeButton
  @Input() text = 'test';
  @Input() color: string = '#424141';
  @Input() icon: string = '';
  @Input() width: number = 20;
  @Input() height: number = 25;
  @Input() background: string = 'rgba(217, 217, 217, 0.5)';
  @Input() typeButton = 'outline';

  isOutline: boolean = false;

  ngOnInit(): void {}
}
