import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Atencion } from '../modelos/atencion';

@Injectable({
  providedIn: 'root'
})
export class AtencionesService {
  lista: Array<{}> = []
  onListaActualizada = new Subject()


  constructor(private http: HttpClient, private router: Router) { }

  listar() : Observable<Atencion[]>{
    return this.http.get<Atencion[]>("http://localhost:3200/atenciones")
  }

}


