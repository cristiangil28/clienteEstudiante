import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Estudiante } from '../modelos/estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http:HttpClient) { 
    console.log('servicio HTTP');
  }
  getEstudiantes(): Observable<any>{
    return this.http.get(this.baseUrl+'/estudiantes');
  }

  createEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    var sufix ='crearestudiante';
    return this.http.post<Estudiante>(`${this.baseUrl}/${sufix}`, estudiante, {headers: this.httpHeaders});
  }
}
