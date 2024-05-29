import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprehensionStepperComponent } from './comprehension-stepper.component';

describe('ComprehensionStepperComponent', () => {
  let component: ComprehensionStepperComponent;
  let fixture: ComponentFixture<ComprehensionStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprehensionStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprehensionStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
