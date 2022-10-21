import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from './../modelo/personaje'
import { Observable } from 'rxjs';
@Injectable()
export class ApiPersonajeService {
  private url = "http://localhost:3000/personaje";
  constructor(private http: HttpClient) { }

  public agregarpersonaje(nuevopersonaje: Personaje): Observable<any> {
   return this.http.post(this.url, nuevopersonaje, {
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    })


  }
}
