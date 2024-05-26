import { Component, OnInit } from '@angular/core';
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
  username = ""
  asignaturesType: Array<any> = []
  lessons: any[]=[];
  constructor(private homeService: HomeService) { }
  
  ngOnInit(): void {
    const userData = this.homeService.getUserData()
    if (userData && userData.data) {
      this.username = userData.data.nombre.toUpperCase()
    }

    this.asignaturesType = this.homeService.getAsigaturesType()
    if (this.asignaturesType) {
      this.asignaturesType.forEach(asignature=>{
        this.homeService.getLessons(asignature.tipo_curso).subscribe(lesson=>{
          asignature.lesson = lesson
        })
      })

    }
  }
}
