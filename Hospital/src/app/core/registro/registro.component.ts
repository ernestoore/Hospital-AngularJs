import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Usuario } from '../../modelos/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  grupo: FormGroup

  constructor(private authService: AuthServiceService, private router: Router) {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password1: new FormControl(null, Validators.required),
      roles: new FormControl(null, Validators.required)
    })
   }

  ngOnInit() {
  }

  registro(){
    const usuario : Usuario = this.grupo.getRawValue()

    this.authService.insert(usuario)
        .subscribe(
          data => this.router.navigate(["/login"]),
          error => console.log(error)
        )
  }



}
