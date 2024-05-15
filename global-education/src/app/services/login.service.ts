import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsignatureStructure } from '../models/asignatures-structure';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {}
  getAsignaturesContent(): Observable<AsignatureStructure>{
    return this.http.get<AsignatureStructure>("../assets/asignatures-content.json");
  }

}
