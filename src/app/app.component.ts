import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'estudiantes_app';
  constructor(){
    console.log('El componente se ha creado');
  }
  ngOnInit(){
    console.log('El componente se ha inicializado');
  }
}
