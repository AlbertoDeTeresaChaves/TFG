import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Asignature } from '../../../models/asignatures-structure';

@Component({
  selector: 'app-home-container',
  standalone: true,
  imports: [],
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss'
})
export class HomeContainerComponent implements OnInit{

  constructor(private appService : LoginService){
    
  }
  ngOnInit(): void {
    this.getAsigatures()
}

getAsigatures():Asignature[]{
  let asigaturesList : Asignature[]=[] 
  this.appService.getAsignaturesContent().subscribe(data=>{
    data.asignatures.forEach(asignature =>{asigaturesList.push(asignature)})
  })
  console.log(asigaturesList)
  return asigaturesList;
}
}
