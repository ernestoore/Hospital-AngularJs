import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MedicosService } from 'src/app/medicos/medicos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AtencionesService } from '../atenciones.service';
import { Atencion } from 'src/app/modelos/atencion';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Medico } from 'src/app/modelos/medico';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  atencion: Atencion
  listaAtencion: Array<Atencion>

  medicoElegido: string
  listaMedicos: Array<string>

  especialidad: string

  grupo: FormGroup
  datosModificados : boolean = true

  listaGeneralMedicos: Array<Medico>

  constructor(private atencionesService: AtencionesService, private medicoService : MedicosService, private activatedRoute: ActivatedRoute, private router: Router ) { 
    this.grupo = new FormGroup({
      _id: new FormControl(null, [Validators.required]),
      paciente: new FormControl(null, [Validators.required]),
      medico: new FormControl(null, [Validators.required]),
      especialidad: new FormControl({ value: "", disabled: true }, [Validators.required]),
      seguro: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
    })

    this.grupo.valueChanges.subscribe(() => {
      this.datosModificados = false
    })

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((respuesta:any) =>{
      const id = respuesta.params.id
      this.atencionesService.editar(id)
      .subscribe(data =>{
        this.atencion = data
        this.medicoElegido = data.medico
        if(this.atencion) this.grupo.patchValue(this.atencion)}
      )
    })

    this.atencionesService.listar()
    .subscribe(
      data => this.listaAtencion = data
      )


    this.medicoService.listar()
    .subscribe(
      data => {this.listaGeneralMedicos = data,
        this.listaMedicos = data.map(da => da.nombre)}
    )
  }

  cancelar(){
    this.router.navigate(['/atenciones'])
  }

  editar(){
    this.datosModificados = true
    this.activatedRoute.paramMap.subscribe((respuesta: any) =>{
      const id = respuesta.params.id 

      if (this.datosModificados){
        this.atencionesService.editarRegistro(id, this.grupo.getRawValue()) 
        .subscribe(
          data => this.router.navigate(["/atenciones"]),
          error => console.log(error)
        )
      }
    })
  }

  guardado(): boolean {
		if (this.datosModificados) return false
    if (this.atencion.paciente == this.grupo.value.paciente
      && this.atencion.medico == this.grupo.value.medico
      && this.atencion.especialidad == this.grupo.value.especialidad
      && this.atencion.tipo == this.grupo.value.tipo
      && this.atencion.seguro == this.grupo.value.seguro
      && this.atencion.fecha == this.grupo.value.fecha) {
			return false
		} else {
			return true
    }
  }
  
  selectionChange(nombreMedico){
    this.especialidad = ""
    let dropdowndata = this.listaGeneralMedicos.find((data:any) => data.nombre === nombreMedico)
    if(dropdowndata){
      this.especialidad = dropdowndata.especialidad
    }
  }

}
