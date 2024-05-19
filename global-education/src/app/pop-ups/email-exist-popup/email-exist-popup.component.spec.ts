import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailExistPopupComponent } from './email-exist-popup.component';

describe('EmailExistPopupComponent', () => {
  let component: EmailExistPopupComponent;
  let fixture: ComponentFixture<EmailExistPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailExistPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailExistPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
