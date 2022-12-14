import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintErrorAnalysisComponent } from './print-error-analysis.component';

describe('PrintErrorAnalysisComponent', () => {
  let component: PrintErrorAnalysisComponent;
  let fixture: ComponentFixture<PrintErrorAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintErrorAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintErrorAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
