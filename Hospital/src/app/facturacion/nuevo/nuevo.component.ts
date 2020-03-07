import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtencionesService } from 'src/app/atenciones/atenciones.service';
import { Atencion } from 'src/app/modelos/atencion';
import { Router } from '@angular/router';
import { FacturacionService } from '../facturacion.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  grupo: FormGroup
  listaPacientes: Array<string>
  pacienteElegido : string

  listaAtencion: Array<Atencion>

  medico : string

  constructor(private atencionService: AtencionesService, private router : Router, private facturacionService : FacturacionService) {
    this.grupo = new  FormGroup({
      paciente : new FormControl(null, [Validators.required]),
      medico: new FormControl({ value: "", disabled: true }, [Validators.required]),
      costo: new FormControl(null, [Validators.required]),
      fecha: new FormControl(null, [Validators.required])
    })
   }

  ngOnInit() {
    this.atencionService.listar()
    .subscribe(
      data => {this.listaPacientes = data.map(d => d.paciente)
      this.listaAtencion = data
      })

  }

  selectionChange(paciente){
   this.medico = ""
   let dropdowndata = this.listaAtencion.find((data: any) => data.paciente == paciente)
   if (dropdowndata){
    this.medico = dropdowndata.medico
   } 
  }

  cancelar(){
    this.router.navigate(['/facturacion'])
  }

  agregar(){
    const nuevaFactura = this.grupo.getRawValue()
    this.facturacionService.insertarRegistro(nuevaFactura)
    .subscribe(
      data => this.router.navigate(["/facturacion"]),
      error => console.log(error)
    )
  }

}
