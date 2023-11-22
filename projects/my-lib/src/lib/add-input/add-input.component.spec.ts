import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInputComponent } from './add-input.component';

describe('AddInputComponent', () => {
  let component: AddInputComponent;
  let fixture: ComponentFixture<AddInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
