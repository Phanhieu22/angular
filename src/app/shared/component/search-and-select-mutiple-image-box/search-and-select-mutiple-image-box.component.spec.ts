import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndSelectMutipleImageBoxComponent } from './search-and-select-mutiple-image-box.component';

describe('SearchAndSelectMutipleImageBoxComponent', () => {
  let component: SearchAndSelectMutipleImageBoxComponent;
  let fixture: ComponentFixture<SearchAndSelectMutipleImageBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndSelectMutipleImageBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAndSelectMutipleImageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
