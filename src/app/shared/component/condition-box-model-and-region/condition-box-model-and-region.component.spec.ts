import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBoxModelAndRegionComponent } from './condition-box-model-and-region.component';

describe('ConditionBoxModelAndRegionComponent', () => {
  let component: ConditionBoxModelAndRegionComponent;
  let fixture: ComponentFixture<ConditionBoxModelAndRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionBoxModelAndRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionBoxModelAndRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
