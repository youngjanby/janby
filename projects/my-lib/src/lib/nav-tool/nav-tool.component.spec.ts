import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolComponent } from './nav-tool.component';

describe('NavToolComponent', () => {
  let component: NavToolComponent;
  let fixture: ComponentFixture<NavToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavToolComponent]
    });
    fixture = TestBed.createComponent(NavToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
