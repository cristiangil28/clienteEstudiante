import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ExploreComponent } from './components/explore/explore.component';
import { HeaderComponent } from './components/header/header.component';
import {Routes} from '@angular/router';
const appRoutes: Routes = [
  {path:'', component: ExploreComponent},
  {path: 'estudiante', component: EstudianteComponent}
  {path: 'header', component: HeaderComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    ExploreComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
