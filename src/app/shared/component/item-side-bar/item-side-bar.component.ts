import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-side-bar',
  templateUrl: './item-side-bar.component.html',
  styleUrls: ['./item-side-bar.component.scss'],
})
export class ItemSideBarComponent implements OnInit {
  @Input() icon: any = ''; // decorate the property with @Input()
  @Input() title: string = '';
  @Input() path: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
