import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCountComponent } from './print-count.component';

describe('PrintCountComponent', () => {
  let component: PrintCountComponent;
  let fixture: ComponentFixture<PrintCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
