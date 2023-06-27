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
const appRoutes: Routes = [
  {path: '', component: EstudianteComponent},
  {path: 'addestudiante', component: AddEstudianteComponent},
  {path: 'editestudiante/:id', component: EditEstudianteComponent},
  {path: 'materias', component: MateriaComponent},
  {path: 'addmateria', component: AddMateriaComponent},
  {path: 'editmateria/:id', component: EditMateriaComponent},
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
    AddMateriaComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
