import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacturacionService } from '../facturacion.service';
import { Factura } from 'src/app/modelos/factura';
import { ActivatedRoute, Router } from '@angular/router';
import { AtencionesService } from 'src/app/atenciones/atenciones.service';
import { Atencion } from 'src/app/modelos/atencion';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  grupo : FormGroup
  factura: Factura
  activateRoute: any
  paciente: string
  listaPacientes: Array<string>
  medico: string;
  listaAtencion: Array<Atencion>;
  datosModificados: boolean = true


  constructor(private atencionService : AtencionesService, private router: Router, private facturaService : FacturacionService,  private activatedRoute: ActivatedRoute) {
    this.grupo = new  FormGroup({
      paciente : new FormControl(null, [Validators.required]),
      medico: new FormControl({ value: "", disabled: true }, [Validators.required]),
      costo: new FormControl(null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      fecha: new FormControl(null, [Validators.required])
    })

    this.grupo.valueChanges.subscribe(() => {
      this.datosModificados = false
    })
   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((respuesta: any)=> {
      const id = respuesta.params.id
      this.facturaService.editar(id)
      .subscribe(data => {
        this.factura = data,
        this.paciente = data.paciente
        if(this.factura) this.grupo.patchValue(this.factura)
      })

    })

    this.atencionService.listar()
    .subscribe(
      data =>{ this.listaPacientes = data.map(d => d.paciente),
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

   editar(){
    this.datosModificados = true
    this.activatedRoute.paramMap.subscribe((respuesta: any) =>{
      const id = respuesta.params.id 

      if (this.datosModificados){
        this.facturaService.editarRegistro(id, this.grupo.getRawValue()) 
        .subscribe(
          data => this.router.navigate(["/facturacion"]),
          error => console.log(error)
        )
      }
    })
   }

   guardado(): boolean {
		if (this.datosModificados) return false
    if (this.factura.paciente == this.grupo.value.paciente
      && this.factura.medico == this.grupo.value.medico
      && this.factura.costo == this.grupo.value.costo
      && this.factura.fecha == this.grupo.value.fecha) {
			return false
		} else {
			return true
    }
  }

}
