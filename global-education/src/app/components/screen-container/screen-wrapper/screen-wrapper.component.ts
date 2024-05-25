import { Component } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Router, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-screen-wrapper',
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet,MatToolbarModule, MatIconModule,MatSidenavModule,MatListModule,MatButtonModule],
  templateUrl: './screen-wrapper.component.html',
  styleUrl: './screen-wrapper.component.scss'
})
export class ScreenWrapperComponent {

  constructor(private homeService : HomeService, private route : Router){}

  logOut(){
    this.homeService.clearUser()
    this.route.navigate(["/auth/login"])
  }
}
