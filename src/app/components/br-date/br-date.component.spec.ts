import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrDateComponent } from './br-date.component';

describe('BrDateComponent', () => {
  let component: BrDateComponent;
  let fixture: ComponentFixture<BrDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
