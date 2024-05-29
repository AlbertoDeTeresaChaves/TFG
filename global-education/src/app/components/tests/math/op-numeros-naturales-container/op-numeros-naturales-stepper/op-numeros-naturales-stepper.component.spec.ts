import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpNumerosNaturalesStepperComponent } from './op-numeros-naturales-stepper.component';

describe('OpNumerosNaturalesStepperComponent', () => {
  let component: OpNumerosNaturalesStepperComponent;
  let fixture: ComponentFixture<OpNumerosNaturalesStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpNumerosNaturalesStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpNumerosNaturalesStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
