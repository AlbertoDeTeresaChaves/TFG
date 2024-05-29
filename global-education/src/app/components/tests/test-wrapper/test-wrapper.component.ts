import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-test-wrapper',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './test-wrapper.component.html',
  styleUrl: './test-wrapper.component.scss'
})
export class TestWrapperComponent {

}
