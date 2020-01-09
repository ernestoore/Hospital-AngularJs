import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { RegistroComponent } from './core/registro/registro.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "registro", component: RegistroComponent},
  {path: "atenciones", loadChildren: () => import("./atenciones/atenciones.module").then(mod => mod.AtencionesModule)},
  {path: "medicos", loadChildren: () => import("./medicos/medicos.module").then(mod => mod.MedicosModule)},
  {path: "facturacion", loadChildren: () => import("./facturacion/facturacion.module").then(mod => mod.FacturacionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
