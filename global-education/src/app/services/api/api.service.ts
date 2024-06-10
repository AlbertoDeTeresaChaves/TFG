import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../../models/user-structure';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';

  getUsuarioById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/usuario/${id}`);
  }

  getUsuarioByEmail(user: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/register/${encodeURIComponent(JSON.stringify(user))}`)
  }

  isUserLoginValid(user: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/login/${encodeURIComponent(JSON.stringify(user))}`).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error)
  }

  getAsigaturesTypes():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/asignaturesType`);
  }

  getAsignatureLessonsByType(type: any):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}/asignaturesType/${encodeURIComponent(JSON.stringify(type))}`);
  }
}
