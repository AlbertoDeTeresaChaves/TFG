import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutenticacionContainerComponent } from './autenticacion-container.component';

describe('AutenticacionContainerComponent', () => {
  let component: AutenticacionContainerComponent;
  let fixture: ComponentFixture<AutenticacionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutenticacionContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutenticacionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
