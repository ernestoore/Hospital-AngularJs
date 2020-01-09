import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  logueado : boolean
  onUserChangeStatus: Subject<boolean> = new Subject<boolean>()

  constructor(private readonly router : Router) { }

login(){
  this.onUserChangeStatus.next(true)
  sessionStorage.setItem("user", "user logged")
  this.router.navigate(["/home"])
  this.logueado = true
}

logout(){
  this.onUserChangeStatus.next(false)
  sessionStorage.clear()
  this.logueado = false;
  this.router.navigate(["/login"])
}

isUserLogged(){
  if(this.logueado || sessionStorage.getItem("user")){
    return true
  }else{
    return false
  }
}


}


