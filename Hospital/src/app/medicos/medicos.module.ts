import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';


@NgModule({
  declarations: [ListadoComponent, NuevoComponent, EdicionComponent],
  imports: [
    CommonModule,
    MedicosRoutingModule
  ]
})
export class MedicosModule { }
