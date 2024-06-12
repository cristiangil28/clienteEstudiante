import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private baseUrl = 'http://localhost:8080/api/login/{documento}/{password}';
  constructor(private http:HttpClient) { }

  getUsuarioLogin(documento: String, password: String):Observable<any>{
    return this.http.get(`${this.baseUrl}?documento=${documento}&password=${password}`);
  }
}
