import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarsComponent } from './seminars.component';

describe('SeminarsComponent', () => {
  let component: SeminarsComponent;
  let fixture: ComponentFixture<SeminarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeminarsComponent]
    });
    fixture = TestBed.createComponent(SeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
