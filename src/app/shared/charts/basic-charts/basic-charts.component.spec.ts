import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChartsComponent } from './basic-charts.component';

describe('BasicChartsComponent', () => {
  let component: BasicChartsComponent;
  let fixture: ComponentFixture<BasicChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
