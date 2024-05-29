import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyStepperComponent } from './vocabulary-stepper.component';

describe('VocabularyStepperComponent', () => {
  let component: VocabularyStepperComponent;
  let fixture: ComponentFixture<VocabularyStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocabularyStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VocabularyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
