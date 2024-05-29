import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingStepperComponent } from './writing-stepper.component';

describe('WritingStepperComponent', () => {
  let component: WritingStepperComponent;
  let fixture: ComponentFixture<WritingStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WritingStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WritingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
