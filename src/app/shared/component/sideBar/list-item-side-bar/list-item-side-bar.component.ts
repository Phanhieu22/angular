import { Component, OnInit, Input } from '@angular/core';
import { ToggleService } from 'src/app/service/toggle.service';

@Component({
  selector: 'app-list-item-side-bar',
  templateUrl: './list-item-side-bar.component.html',
  styleUrls: ['./list-item-side-bar.component.scss'],
})
export class ListItemSideBarComponent implements OnInit {
  @Input() dataChildren: any;
  constructor(public toggle: ToggleService) {}
  itemActive: any = [];
  active = false;

  handleActive(id: number) {
    this.toggle.setterIdActive(id);

    // this case is closed
    if (id === this.toggle.getterIdActive() && this.active == false) {
      this.active = true;
    } else {
      this.active = false;
    }

    // this cased id open
  }
  addItem(item: any) {
    this.itemActive.push(item?.children);
  }

  ngOnInit(): void {}
}
