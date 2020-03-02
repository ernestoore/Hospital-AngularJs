import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicosService } from '../medicos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Medico } from 'src/app/modelos/medico';
import { ICanDeactivate, GuardadoGuard } from '../guards/guardado.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit, ICanDeactivate {
  
  medico: Medico
  grupo: FormGroup
  datosModificados : boolean = true

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private medicosService: MedicosService) {
    this.grupo = new FormGroup({
      _id: new FormControl(null),
      nombre: new FormControl(null,[Validators.required]),
      apellido : new FormControl(null,[Validators.required]),
      especialidad : new FormControl(null,[Validators.required]),
      experiencia : new FormControl(null,[Validators.required])

    })

    this.grupo.valueChanges.subscribe(() => {
      this.datosModificados = false
    })

   }

   ngOnInit() {
    this.activatedRoute.paramMap.subscribe((respuesta: any) =>{
      const id = respuesta.params.id
      this.medicosService.editar(id)
      .subscribe(data =>{
        this.medico = data
      // si existe usuario que se asigne al formgroup
      //setValue recibe un objeto que tenga estructura del Formgroup y asigna los valores a cada Control.
      if(this.medico) this.grupo.patchValue(this.medico)})
      })
  }

  cancelar(){
    this.datosModificados = false
    this.router.navigate(['/medicos'])
  }

  editar(){
    this.datosModificados = true
    this.activatedRoute.paramMap.subscribe((respuesta: any) =>{
      const id = respuesta.params.id 
      
    if (this.datosModificados){
      this.medicosService.editarRegistro(id, this.grupo.getRawValue()) 
      .subscribe(
        data => this.router.navigate(["/medicos"]),
        error => console.log(error)
      )
    }
    })
  }

  guardado(): boolean {
		if (this.datosModificados) return false

    if (this.medico.nombre == this.grupo.value.nombre
      && this.medico.apellido == this.grupo.value.apellido
      && this.medico.especialidad == this.grupo.value.especialidad
      && this.medico.experiencia == this.grupo.value.experiencia) {
			return false
		} else {
			return true
    }
	}

}
