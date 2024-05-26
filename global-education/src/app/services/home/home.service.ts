import { Injectable, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { AsignatureStructure } from '../../models/asignatures-structure';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService implements OnInit{
  userContent: any
  userDataKey = "User"
  constructor(private apiService : ApiService) {
  }

  ngOnInit(){
  }

  setUser(datos: any) {
    this.userContent = datos
    if (this.isLocalStorageAvailable()) {
      localStorage.setItem(this.userDataKey, JSON.stringify(datos))
    }
  }
  getUserData() {
    if (!this.userContent) {
      if (this.isLocalStorageAvailable()) {
        const data = localStorage.getItem(this.userDataKey);
        if (data) {
          this.userContent = JSON.parse(data);
        }
      }
    }
    return this.userContent;
  }

  clearUser() {
    this.userContent = null
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem(this.userDataKey)
    }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  getAsigaturesType(){
    let asignaturesTypeList:any;
    this.apiService.getAsigaturesTypes().subscribe(data=>{
      asignaturesTypeList=data
    })
    return asignaturesTypeList
  }

  getLessons(type : string):Observable<any[]>{
    return this.apiService.getAsignatureLessonsByType(type)
    
  }  
}
