import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-screen-wrapper',
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet],
  templateUrl: './screen-wrapper.component.html',
  styleUrl: './screen-wrapper.component.scss'
})
export class ScreenWrapperComponent {

}
