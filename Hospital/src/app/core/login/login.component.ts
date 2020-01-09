import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

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
      pass: new FormControl(null, Validators.required)
    })
   }

   login(){
     this.authService.login()
   }

  ngOnInit() {

  }
}
