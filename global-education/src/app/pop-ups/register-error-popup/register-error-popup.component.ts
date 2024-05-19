import { Component } from '@angular/core';
import { MatDialogClose ,MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-error-popup',
  standalone: true,
  imports: [MatDialogModule,RouterLink,MatDialogClose],
  templateUrl: './register-error-popup.component.html',
  styleUrl: './register-error-popup.component.scss'
})
export class RegisterErrorPopupComponent {

}
