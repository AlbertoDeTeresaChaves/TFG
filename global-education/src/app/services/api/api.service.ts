import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';

  getDatos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/datos`);
  }

  getUsuarioById(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/usuario/${id}`);
  }

  getUsuarioByEmail(user:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/register/${encodeURIComponent(JSON.stringify(user))}`)
  }
  getPruebaMail(datos: any): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/register/${encodeURIComponent(JSON.stringify(datos))}`);
  }
}