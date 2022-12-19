import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-image-box',
  templateUrl: './input-image-box.component.html',
  styleUrls: ['./input-image-box.component.scss'],
})
export class InputImageBoxComponent implements OnInit {
  @Input() round = 10;
  @Input() height = 10;
  @Input() width = 10;
  @Input() placeholder: string = '';

  constructor() {}

  ngOnInit(): void {}
}
