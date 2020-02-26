import { Injectable } from '@angular/core';
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
  onUserChangeStatus: Subject<boolean> = new Subject<boolean>()

  constructor(private readonly router: Router, private http: HttpClient) { }

  login() {
    this.onUserChangeStatus.next(true)
    sessionStorage.setItem("user", "user logged")
    this.router.navigate(["/home"])
    this.logueado = true
  }

  logout() {
    this.onUserChangeStatus.next(false)
    sessionStorage.clear()
    this.logueado = false;
    this.router.navigate(["/login"])
  }

  isUserLogged() {
    if (this.logueado || sessionStorage.getItem("user")) {
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


