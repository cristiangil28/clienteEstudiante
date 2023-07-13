import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from 'src/app/modelos/matricula/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http:HttpClient) { }

  getMateriasMatriculadas():Observable<any>{
    return this.http.get(this.baseUrl+'/estudiantes');
  }
}
