import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInformationComponent } from './print-information.component';

describe('PrintInformationComponent', () => {
  let component: PrintInformationComponent;
  let fixture: ComponentFixture<PrintInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
