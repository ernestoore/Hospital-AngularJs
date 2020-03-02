import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { Usuario } from '../../modelos/usuario';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  logueado: boolean
  onStateChange = new EventEmitter()

  constructor(private readonly router: Router, private http: HttpClient) { }

  login(usuario: Usuario) {

    this.http.post<Object>("http://localhost:3200/usuarios/login", usuario)
      .subscribe(
        (data: any) => {
          this.router.navigate(["/home"])
          this.logueado = true
          sessionStorage.setItem("token", JSON.stringify(data))
          this.onStateChange.emit(true)

      })
  }

  logout() {
    sessionStorage.clear()
    this.logueado = false;
    this.router.navigate(["/login"])
    this.onStateChange.emit(false)

  }

  isUserLogged() {
    if (this.logueado || sessionStorage.getItem("token")) {
      return true
    } else {
      return false
    }
  } 

  insert(usuario: Usuario): Observable<{message: string}>{
    return this.http.post<{message: string}>("http://localhost:3200/usuarios", usuario)
  }

  getToken(){
    const token = JSON.parse(sessionStorage.getItem("token"))
  return token
  }


}


