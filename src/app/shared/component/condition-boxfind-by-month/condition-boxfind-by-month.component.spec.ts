import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBoxfindByMonthComponent } from './condition-boxfind-by-month.component';

describe('ConditionBoxfindByMonthComponent', () => {
  let component: ConditionBoxfindByMonthComponent;
  let fixture: ComponentFixture<ConditionBoxfindByMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionBoxfindByMonthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionBoxfindByMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
