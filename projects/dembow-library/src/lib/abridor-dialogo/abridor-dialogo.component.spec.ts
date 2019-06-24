import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbridorDialogoComponent } from './abridor-dialogo.component';

describe('AbridorDialogoComponent', () => {
  let component: AbridorDialogoComponent;
  let fixture: ComponentFixture<AbridorDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbridorDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbridorDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
