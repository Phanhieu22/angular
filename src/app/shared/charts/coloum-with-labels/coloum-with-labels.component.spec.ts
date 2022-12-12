import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoumWithLabelsComponent } from './coloum-with-labels.component';

describe('ColoumWithLabelsComponent', () => {
  let component: ColoumWithLabelsComponent;
  let fixture: ComponentFixture<ColoumWithLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColoumWithLabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColoumWithLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
