import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicosService } from '../medicos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Medico } from 'src/app/modelos/medico';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  medico: Medico
  grupo: FormGroup

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private medicosService: MedicosService) {
    this.grupo = new FormGroup({
      _id: new FormControl(null),
      nombre: new FormControl(null,[Validators.required]),
      apellido : new FormControl(null,[Validators.required]),
      especialidad : new FormControl(null,[Validators.required]),
      experiencia : new FormControl(null,[Validators.required])

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
      if(this.medico) this.grupo.setValue(this.medico)})
      })
  }

}
