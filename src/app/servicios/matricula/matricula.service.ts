import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from 'src/app/modelos/matricula/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http:HttpClient) { }

  getMateriasMatriculadas():Observable<any>{
    return this.http.get(this.baseUrl+'/estudiantes');
  }
  matricularMateria(id_usuario: number, id_materia : number):Observable<any>{
    return this.http.put(`${this.baseUrl}/matricula/{materiaID}/{usuarioID}?materiaID=${id_materia}&usuarioID=${id_usuario}`,this.httpHeaders);
  }
}
