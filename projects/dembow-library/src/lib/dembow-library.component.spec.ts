import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DembowLibraryComponent } from './dembow-library.component';

describe('DembowLibraryComponent', () => {
  let component: DembowLibraryComponent;
  let fixture: ComponentFixture<DembowLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DembowLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DembowLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
