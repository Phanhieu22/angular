import { Component, OnInit } from '@angular/core';
import { buttonModel } from 'src/app/model/buttonModel';

@Component({
  selector: 'app-button-image-box',
  templateUrl: './button-image-box.component.html',
  styleUrls: ['./button-image-box.component.scss'],
})
export class ButtonImageBoxComponent implements OnInit, buttonModel {
  constructor() {}
  // text, icon, width, height, typeButton
  text = 'test';
  color: string = '#424141';
  icon: string = '';
  width: number = 20;
  height: number = 25;
  background: string = 'rgba(217, 217, 217, 0.5)';
  typeButton = 'outline';

  ngOnInit(): void {}
}
