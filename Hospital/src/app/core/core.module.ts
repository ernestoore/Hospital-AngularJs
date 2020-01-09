import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, MatInputModule, MatCardModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [LoginComponent, HomeComponent, MenuComponent, RegistroComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [MenuComponent]
})
export class CoreModule { }
