import { Component } from '@angular/core';
import { MatDialogClose ,MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-email-exist-popup',
  standalone: true,
  imports: [MatDialogModule,RouterLink,MatDialogClose],
  templateUrl: './email-exist-popup.component.html',
  styleUrl: './email-exist-popup.component.scss'
})
export class EmailExistPopupComponent {

}
