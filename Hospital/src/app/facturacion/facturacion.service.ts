import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../modelos/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  constructor(private router: Router, private http: HttpClient) { }

  listar():Observable<Factura[]>{
  return this.http.get<Factura[]>("http://localhost:3200/facturas")
  }

  editar(id):Observable<Factura>{
    return this.http.get<Factura>("http://localhost:3200/facturas/" +id)
  }

  insertarRegistro(factura : Factura){
    return this.http.post("http://localhost:3200/facturas", factura, {responseType: 'text' })
  }

  editarRegistro(id: string, factura: Factura){
    return this.http.put("http://localhost:3200/facturas/" + id,factura , {responseType: 'text' })
  }

  eliminarRegistro(id){
    return this.http.delete("http://localhost:3200/facturas/" + id, {responseType: 'text' })
  }

}
