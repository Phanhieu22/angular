import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInforChildrenComponent } from './print-infor-children.component';

describe('PrintInforChildrenComponent', () => {
  let component: PrintInforChildrenComponent;
  let fixture: ComponentFixture<PrintInforChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintInforChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintInforChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
