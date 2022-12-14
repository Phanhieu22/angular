import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionFindPrintInfoComponent } from './condition-find-print-info.component';

describe('ConditionFindPrintInfoComponent', () => {
  let component: ConditionFindPrintInfoComponent;
  let fixture: ComponentFixture<ConditionFindPrintInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionFindPrintInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionFindPrintInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
