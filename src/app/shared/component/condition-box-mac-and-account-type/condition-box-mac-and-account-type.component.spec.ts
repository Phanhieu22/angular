import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBoxMacAndAccountTypeComponent } from './condition-box-mac-and-account-type.component';

describe('ConditionBoxMacAndAccountTypeComponent', () => {
  let component: ConditionBoxMacAndAccountTypeComponent;
  let fixture: ComponentFixture<ConditionBoxMacAndAccountTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionBoxMacAndAccountTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionBoxMacAndAccountTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
