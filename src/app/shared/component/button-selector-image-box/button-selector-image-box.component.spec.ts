import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSelectorImageBoxComponent } from './button-selector-image-box.component';

describe('ButtonSelectorImageBoxComponent', () => {
  let component: ButtonSelectorImageBoxComponent;
  let fixture: ComponentFixture<ButtonSelectorImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSelectorImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSelectorImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
