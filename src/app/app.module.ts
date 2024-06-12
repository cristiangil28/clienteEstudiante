import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import { AddEstudianteComponent } from './components/add-estudiante/add-estudiante.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEstudianteComponent } from './components/edit-estudiante/edit-estudiante.component';
import { MateriaComponent } from './components/materia/materia.component';
import { EditMateriaComponent } from './components/edit-materia/edit-materia.component';
import { AddMateriaComponent } from './components/add-materia/add-materia.component';
import { MostrarMateriasComponent } from './components/materia/mostrar-materias/mostrar-materias.component';
import { RegistrarMateriaComponent } from './components/materia/registrar-materia/registrar-materia.component';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { MatIconModule } from "@angular/material/icon";
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from './servicios/proteger-ruta-service/auth.service';
const appRoutes: Routes = [
  {path: '', component: EstudianteComponent, canActivate : [AuthService]},
  {path: 'addestudiante', component: AddEstudianteComponent,canActivate : [AuthService]},
  {path: 'editestudiante/:id', component: EditEstudianteComponent, canActivate : [AuthService]},
  {path: 'materias', component: MateriaComponent, canActivate : [AuthService]},
  {path: 'addmateria', component: AddMateriaComponent, canActivate : [AuthService]},
  {path: 'editmateria/:id', component: EditMateriaComponent, canActivate : [AuthService]},
  {path: 'mostrarMaterias/:id', component: MostrarMateriasComponent, canActivate : [AuthService]},
  {path: 'registrarMateria/:id', component: RegistrarMateriaComponent, canActivate : [AuthService]},
  {path: 'login', component: LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    ExploreComponent,
    HeaderComponent,
    AddEstudianteComponent,
    EditEstudianteComponent,
    MateriaComponent,
    EditMateriaComponent,
    AddMateriaComponent,
    MostrarMateriasComponent,
    RegistrarMateriaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
