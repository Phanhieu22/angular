import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonImageBoxComponent } from './button-image-box.component';

describe('ButtonImageBoxComponent', () => {
  let component: ButtonImageBoxComponent;
  let fixture: ComponentFixture<ButtonImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
