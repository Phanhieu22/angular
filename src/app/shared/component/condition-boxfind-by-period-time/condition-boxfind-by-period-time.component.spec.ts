import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBoxfindByPeriodTimeComponent } from './condition-boxfind-by-period-time.component';

describe('ConditionBoxfindByPeriodTimeComponent', () => {
  let component: ConditionBoxfindByPeriodTimeComponent;
  let fixture: ComponentFixture<ConditionBoxfindByPeriodTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionBoxfindByPeriodTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionBoxfindByPeriodTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
