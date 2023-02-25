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
const appRoutes: Routes = [
  {path:'', component: ExploreComponent},
  {path: 'estudiante', component: EstudianteComponent}
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
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
