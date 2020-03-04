import { Component, OnInit, ViewChild } from '@angular/core';
import { Atencion } from 'src/app/modelos/atencion';
import { DataSource } from '@angular/cdk/table';
import { AtencionesService } from '../atenciones.service';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  atencion : Atencion[]
  displayedColumns: string[] = ['paciente', 'medico', 'especialidad', 'tipo','seguro', 'fecha', 'editar', 'eliminar'];
  dataSource = new AtencionDataSource(this.atencionService)
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private atencionService : AtencionesService) { }

  ngOnInit() {
  }

}

export class AtencionDataSource extends DataSource<any> {
  constructor(private atencionService: AtencionesService ) {
    super();
  }
  connect(): Observable<Atencion[]> {
    return this.atencionService.listar();
  }
  disconnect() {}
}
