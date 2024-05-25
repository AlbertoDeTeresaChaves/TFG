import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user-structure';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent implements OnInit {
  // username = this.homeService.getUser().data.nombre 
  username=""
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    const userData = this.homeService.getUserData()

    if(userData && userData.data){
      this.username = userData.data.nombre.toUpperCase()
    }
  }



  // getAsigatures():Asignature[]{
  //   let asigaturesList : Asignature[]=[] 
  //   this.appService.getAsignaturesContent().subscribe(data=>{
  //     data.asignatures.forEach(asignature =>{asigaturesList.push(asignature)})
  //   })
  //   console.log(asigaturesList)
  //   return asigaturesList;
  // }
}
