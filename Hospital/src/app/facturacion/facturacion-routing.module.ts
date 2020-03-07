import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';
import { GuardadoGuard } from '../medicos/guards/guardado.guard';


const routes: Routes = [
  {path: "", component: ListadoComponent},
  {path: "nuevo", component: NuevoComponent},
  {path: "edicion/:id", component: EdicionComponent, canDeactivate: [GuardadoGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturacionRoutingModule { }
