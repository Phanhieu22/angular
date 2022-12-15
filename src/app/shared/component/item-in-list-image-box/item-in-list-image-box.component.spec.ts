import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInListImageBoxComponent } from './item-in-list-image-box.component';

describe('ItemInListImageBoxComponent', () => {
  let component: ItemInListImageBoxComponent;
  let fixture: ComponentFixture<ItemInListImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemInListImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemInListImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
