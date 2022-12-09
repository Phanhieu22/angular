import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item-side-bar',
  templateUrl: './list-item-side-bar.component.html',
  styleUrls: ['./list-item-side-bar.component.scss'],
})
export class ListItemSideBarComponent implements OnInit {
  constructor() {}
  isActive = false;

  onChangeActive() {
    this.isActive = !this.isActive;
  }

  // a data like this
  mockConfig = {
    navTitle: 'content management',
    children: [
      {
        titleChildren: 'main management',
        path: 'children',
      },
      {
        titleChildren: 'post management',
        path: 'children',
      },
      {
        titleChildren: 'Design management',
        path: 'children',
      },
    ],
  };

  ngOnInit(): void {}
}
