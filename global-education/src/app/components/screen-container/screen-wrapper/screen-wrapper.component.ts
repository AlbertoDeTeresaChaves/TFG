import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-screen-wrapper',
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet,MatToolbarModule, MatIconModule,MatSidenavModule,MatListModule,MatButtonModule],
  templateUrl: './screen-wrapper.component.html',
  styleUrl: './screen-wrapper.component.scss'
})
export class ScreenWrapperComponent {


}
