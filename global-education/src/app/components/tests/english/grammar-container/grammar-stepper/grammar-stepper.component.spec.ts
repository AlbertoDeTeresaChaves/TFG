import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarStepperComponent } from './grammar-stepper.component';

describe('GrammarStepperComponent', () => {
  let component: GrammarStepperComponent;
  let fixture: ComponentFixture<GrammarStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrammarStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
