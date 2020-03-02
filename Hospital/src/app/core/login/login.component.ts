import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  grupo: FormGroup

  constructor(private authService: AuthServiceService) {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
   }

   login(){
     const usuario : Usuario = this.grupo.getRawValue()
     this.authService.login(usuario)
   }

  ngOnInit() {

  }
}
