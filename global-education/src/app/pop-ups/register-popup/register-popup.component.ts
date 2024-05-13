import { Component } from '@angular/core';
import { MatDialogClose ,MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-popup',
  standalone: true,
  imports: [MatDialogModule,RouterLink,MatDialogClose],
  templateUrl: './register-popup.component.html',
  styleUrl: './register-popup.component.scss'
})
export class RegisterPopupComponent {

constructor( ){ }

  
}
