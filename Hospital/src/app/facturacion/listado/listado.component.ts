import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { FacturacionService } from '../facturacion.service';
import { Factura } from 'src/app/modelos/factura';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['_id', 'paciente', 'medico', 'costo', 'fecha', 'editar', 'eliminar'];
  dataSource = new MedicoDataSource(this.facturaService)

  constructor(private router: Router, private facturaService: FacturacionService ) { }

  ngOnInit() {
  }


  Agregar(){
    this.router.navigate(['/facturacion','nuevo'])
  }

}


export class MedicoDataSource extends DataSource<any> {
  constructor(private facturaService: FacturacionService) {
    super();
  }
  connect(): Observable<Factura[]> {
    return this.facturaService.listar();
  }
  disconnect() {}
}