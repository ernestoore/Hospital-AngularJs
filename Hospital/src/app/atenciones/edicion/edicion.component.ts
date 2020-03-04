import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  listamedicos: Array<string> = ["Carmen", "Marcela", "Oscar", "Carlos"]
  grupo: FormGroup
  constructor() { 
    this.grupo = new FormGroup({
      _id: new FormControl(null, [Validators.required]),
      paciente: new FormControl(null, [Validators.required]),
      medico: new FormControl(null, [Validators.required]),
      seguro: new FormControl(null, [Validators.required, Validators.email]),
    })
  }

  ngOnInit() {
  }

}
