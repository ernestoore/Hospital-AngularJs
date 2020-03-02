import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {Medico} from '../../modelos/medico';
import { MedicosService } from '../medicos.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  medicos: Medico[]
  displayedColumns: string[] = ['nombre', 'apellido', 'especialidad', 'experiencia', 'editar', 'eliminar'];
  dataSource = new MedicoDataSource(this.medicoService)
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private medicoService : MedicosService, private router : Router) { }

  ngOnInit() {

  }

  editarRegistro(id: string){
    this.router.navigate(['/medicos','edicion', id])
  }

  eliminar(id: string){
    this.medicoService.eliminar(id)
  }
}

export class MedicoDataSource extends DataSource<any> {
  constructor(private medicoService: MedicosService) {
    super();
  }
  connect(): Observable<Medico[]> {
    return this.medicoService.listar();
  }
  disconnect() {}

  
}

