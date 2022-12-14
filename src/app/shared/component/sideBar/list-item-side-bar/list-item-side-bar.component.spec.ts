import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSideBarComponent } from './list-item-side-bar.component';

describe('ListItemSideBarComponent', () => {
  let component: ListItemSideBarComponent;
  let fixture: ComponentFixture<ListItemSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListItemSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
