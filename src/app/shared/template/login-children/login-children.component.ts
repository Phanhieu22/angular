import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-children',
  templateUrl: './login-children.component.html',
  styleUrls: ['./login-children.component.scss'],
})
export class LoginChildrenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  placeholderId: string = 'ID';

  placeholderPass: string = 'PW';
  outline = 'outline';
}
