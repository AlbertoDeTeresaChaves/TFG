import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosNaturalesStepperComponent } from './numeros-naturales-stepper.component';

describe('NumerosNaturalesStepperComponent', () => {
  let component: NumerosNaturalesStepperComponent;
  let fixture: ComponentFixture<NumerosNaturalesStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumerosNaturalesStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumerosNaturalesStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
