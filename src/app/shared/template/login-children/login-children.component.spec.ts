import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginChildrenComponent } from './login-children.component';

describe('LoginChildrenComponent', () => {
  let component: LoginChildrenComponent;
  let fixture: ComponentFixture<LoginChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
