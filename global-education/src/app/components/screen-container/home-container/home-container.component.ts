import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home/home.service';
import { RouterLink } from '@angular/router';

interface Asignature {
  tipo_curso: string;
  lesson?: any[];
}

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  username = '';
  asignaturesType: Asignature[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    const userData = this.homeService.getUserData();
    if (userData && userData.data) {
      this.username = userData.data.nombre.toUpperCase();
    }

    this.homeService.getAsigaturesType().subscribe(asignatures => {
      this.asignaturesType = asignatures;
      this.asignaturesType.forEach(asignature => {
        this.homeService.getLessons(asignature.tipo_curso).subscribe(lessons => {
          asignature.lesson = lessons;
        });
      });
    });
  }

  getLessonImageUrl(image: string): string {
    const parts = image.split('_');
    return `../../../../assets/front-pages-home/${parts[0]}/${parts[1]}.jpg`;
  }

  getPathRouterLink(path:string):string{
    const parts = path.split('_');
    return `/GlobalEducation/${parts[0]}/${parts[1]}`
  }

}
