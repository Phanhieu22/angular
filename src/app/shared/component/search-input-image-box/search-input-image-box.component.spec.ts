import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputImageBoxComponent } from './search-input-image-box.component';

describe('SearchInputImageBoxComponent', () => {
  let component: SearchInputImageBoxComponent;
  let fixture: ComponentFixture<SearchInputImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
