import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtencionesService } from 'src/app/atenciones/atenciones.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  grupo: FormGroup
  listaPacientes: Array<string>

  constructor(private atencionService: AtencionesService) {
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
      data => this.listaPacientes = data.map(d => d.paciente)
    )
  }

}
