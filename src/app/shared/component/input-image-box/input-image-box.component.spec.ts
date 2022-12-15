import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputImageBoxComponent } from './input-image-box.component';

describe('InputImageBoxComponent', () => {
  let component: InputImageBoxComponent;
  let fixture: ComponentFixture<InputImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
