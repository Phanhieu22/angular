import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRadioImageBoxComponent } from './list-radio-image-box.component';

describe('ListRadioImageBoxComponent', () => {
  let component: ListRadioImageBoxComponent;
  let fixture: ComponentFixture<ListRadioImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRadioImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRadioImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
