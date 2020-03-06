import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtencionesModule } from '../atenciones.module';
import { AtencionesService } from '../atenciones.service';
import { Atencion } from 'src/app/modelos/atencion';
import { Router } from '@angular/router';
import { MedicosService } from 'src/app/medicos/medicos.service';
import { Medico } from 'src/app/modelos/medico';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  listaMedicos: Array<string>
  listaGeneralMedicos: Array<Medico>
  especialidad: string
  grupo: FormGroup

  constructor(private atencionService: AtencionesService, private router: Router, private medicosService: MedicosService) {
    this.grupo = new FormGroup({
      paciente: new FormControl(null, [Validators.required]),
      medico: new FormControl(null, [Validators.required]),
      especialidad: new FormControl({ value: "", disabled: true }, [Validators.required]),
      seguro: new FormControl(null, Validators.required),
      tipo: new FormControl(null, Validators.required),
      fecha: new FormControl(null, Validators.required),
    })
   }

  ngOnInit() {
    this.medicosService.listar()
    .subscribe(
      data => {
        this.listaGeneralMedicos = data
        this.listaMedicos = data.map(d => d.nombre)
      }
    )
  }

  selectionChange(nombreMedico){
    this.especialidad = ""
    let dropdowndata = this.listaGeneralMedicos.find((data:any) => data.nombre === nombreMedico)
    if(dropdowndata){
      this.especialidad = dropdowndata.especialidad
    }
  }


  agregar(){
    const atencion : Atencion = this.grupo.getRawValue()
    console.log(atencion)
    this.atencionService.insertarRegistro(atencion)
    .subscribe(
      data => this.router.navigate(["/atenciones"]),
      error => console.log(error)
    )
  }

  cancelar(){
    this.router.navigate(["/atenciones"])
  }

}
