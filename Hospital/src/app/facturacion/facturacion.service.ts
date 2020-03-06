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

}
