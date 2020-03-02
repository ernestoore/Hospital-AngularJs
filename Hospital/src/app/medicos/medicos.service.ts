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

    /* this.listar().subscribe((data: any[])=> 
    {
      this.lista.push(...data)
      console.log(this.lista)
    }) 
    return this.medico = this.lista.filter((el: any) => {el._id == id})[0] */
    return this.getMedicoById(id)
  }

  getMedicoById(id: string): Observable<Medico> {
    return this.http.get<Medico>("http://localhost:3200/medicos/"+ id);
  }

  

  eliminar(id){

  }

}

