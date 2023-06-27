import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Materia } from '../../modelos/materia/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  getMaterias(): Observable<any>{
    return this.http.get(this.baseUrl+'/materias');
  }

  addMateria(materia : Materia):Observable <Materia>{
    console.log('entro: '+materia.nombreMateria);
    var sufix ='crearmateria';
    return this.http.post<Materia>(`${this.baseUrl}/${sufix}`, materia, {headers: this.httpHeaders,responseType : 'json'});
  }

  getMateria(id : number):Observable<any>{
    return this.http.get(this.baseUrl+'/materia/{ID}?id='+id);
  }

  updateMateria(id: number, materia : Materia): Observable<any>{
    return this.http.put(`${this.baseUrl}/actualizarMateria/{ID}?id=${id}`, materia,{headers: this.httpHeaders});
  }

  deleteMateria(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/eliminarMateria/{ID}?id=${id}`);
  }
}
