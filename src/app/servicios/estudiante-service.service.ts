import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstudianteServiceService {

  constructor(private http:HttpClient) { 
    console.log('servicio HTTP');
  }
  getEstudiantes(){
    return this.http.get('http://localhost:8080/api/estudiantes');
  }
}
