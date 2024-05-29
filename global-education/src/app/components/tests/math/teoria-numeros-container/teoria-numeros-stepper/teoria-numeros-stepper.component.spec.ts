import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaNumerosStepperComponent } from './teoria-numeros-stepper.component';

describe('TeoriaNumerosStepperComponent', () => {
  let component: TeoriaNumerosStepperComponent;
  let fixture: ComponentFixture<TeoriaNumerosStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeoriaNumerosStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeoriaNumerosStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
