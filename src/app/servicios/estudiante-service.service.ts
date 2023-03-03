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

  getEstudiante(id:number):Observable<any>{
    return this.http.get(this.baseUrl+'/estudiante/{ID}?id='+id);
  }

  createEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    var sufix ='crearestudiante';
    return this.http.post<Estudiante>(`${this.baseUrl}/${sufix}`, estudiante, {headers: this.httpHeaders});
  }
  updateEstudiante(id:number, estudiante: Estudiante): Observable<any> {
    estudiante.id = id;
    return this.http.put(`${this.baseUrl}/actualizarEstudiante/{ID}?id=${estudiante.id}`, estudiante,{headers: this.httpHeaders});
  }
}
