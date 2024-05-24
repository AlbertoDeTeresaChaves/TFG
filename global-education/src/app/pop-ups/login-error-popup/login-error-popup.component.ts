import { Component } from '@angular/core';
import { MatDialogClose, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-error-popup',
  standalone: true,
  imports: [MatDialogModule,RouterLink,MatDialogClose],
  templateUrl: './login-error-popup.component.html',
  styleUrl: './login-error-popup.component.scss'
})
export class LoginErrorPopupComponent {

}
