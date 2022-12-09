import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  mockConfig = [
    {
      icon: '',
      type: 'menuItem',
      textNavContent: 'Member management',
      path: 'user/userList',
    },
    {
      icon: '',
      type: 'listMenuItem',
      textNavContent: 'Content management',
      children: [
        {
          icon: '',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
