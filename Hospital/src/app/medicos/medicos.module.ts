import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';
import { MatTableModule, MatInputModule, MatFormFieldModule, MatCardModule } from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicosService } from './medicos.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ListadoComponent, NuevoComponent, EdicionComponent],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [MedicosService  ]
})
export class MedicosModule { }
