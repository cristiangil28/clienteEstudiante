import { Component } from '@angular/core';
import { EstudianteServiceService } from 'src/app/servicios/estudiante-service.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {
  estudiantesList:any = [];
  constructor(private estudiante: EstudianteServiceService){

  }

  ngOnInit(){
    console.log('El componente se ha inicializado');
    
    this.estudiante.getEstudiantes().subscribe(x => this.estudiantesList = x);
  }
}
