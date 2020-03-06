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

  insertarRegistro(atencion: Atencion){
    return this.http.post("http://localhost:3200/atenciones", atencion, {responseType: 'text' })
  }


  listar() : Observable<Atencion[]>{
    return this.http.get<Atencion[]>("http://localhost:3200/atenciones")
  }

  editar(id: string){
    return this.getAtencionById(id)
  }

  getAtencionById(id: string): Observable<Atencion> {
    return this.http.get<Atencion>("http://localhost:3200/atenciones/"+ id)
  }


  editarRegistro(id: string, atencion: Atencion){
    return this.http.put("http://localhost:3200/atenciones/"+ id, atencion, {responseType: 'text' })
  }

  eliminarAtencion(id: string){
    return this.http.delete("http://localhost:3200/atenciones/"+ id, {responseType: 'text' })
  }

}


