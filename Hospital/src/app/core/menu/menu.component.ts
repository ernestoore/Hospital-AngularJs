import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userlogged: boolean = false

  constructor(private auth: AuthServiceService) { }

  ngOnInit() {
    this.userlogged = this.auth.isUserLogged()

    this.auth.onUserChangeStatus.subscribe(
        (status :boolean) => this.userlogged = status
    )
  }

  logout(){
    this.auth.logout()
  }

}
