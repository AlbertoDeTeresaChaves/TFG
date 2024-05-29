import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterosStepperComponent } from './enteros-stepper.component';

describe('EnterosStepperComponent', () => {
  let component: EnterosStepperComponent;
  let fixture: ComponentFixture<EnterosStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterosStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterosStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
