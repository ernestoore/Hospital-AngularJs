import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../medicos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Medico } from 'src/app/modelos/medico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
 grupo : FormGroup

  constructor(private medicoService : MedicosService, private router : Router) {
    this.grupo = new  FormGroup({
      nombre : new FormControl(null, [Validators.required]),
      apellido: new FormControl(null, [Validators.required]),
      especialidad: new FormControl(null, [Validators.required]),
      experiencia: new FormControl(null, [Validators.required])
    })
   } 

  ngOnInit() {
  }

  Agregar(){
    const medico : Medico = this.grupo.getRawValue()
    this.medicoService.insert(medico)
    .subscribe(
      data => this.router.navigate(["/medicos"]),
      error => console.log(error)
    )
  }
}
