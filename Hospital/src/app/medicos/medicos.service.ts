import { Injectable } from '@angular/core';
import { Medico } from '../modelos/medico';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  lista: Array<{}> = []
  onListaActualizada = new Subject()
  medico: Medico

  constructor(private http: HttpClient, private router: Router) { }

  insert(medico: Medico): Observable<{message: string}>{
    return this.http.post<{message: string}>("http://localhost:3200/medicos", medico)
  }

  listar() : Observable<Medico[]>{
    return this.http.get<Medico[]>("http://localhost:3200/medicos")
  }

  editar(id: string){
    return this.getMedicoById(id)
  }

  getMedicoById(id: string): Observable<Medico> {
    return this.http.get<Medico>("http://localhost:3200/medicos/"+ id)
  }

  editarRegistro(id: string, medico: Medico){
    return this.http.put("http://localhost:3200/medicos/"+ id, medico, {responseType: 'text' })
  }

  eliminarRegistro(id: string){
    return this.http.delete("http://localhost:3200/medicos/"+ id, {responseType: 'text' })
  }

}

