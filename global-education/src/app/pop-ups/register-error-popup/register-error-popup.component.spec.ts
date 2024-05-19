import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterErrorPopupComponent } from './register-error-popup.component';

describe('RegisterErrorPopupComponent', () => {
  let component: RegisterErrorPopupComponent;
  let fixture: ComponentFixture<RegisterErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterErrorPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
