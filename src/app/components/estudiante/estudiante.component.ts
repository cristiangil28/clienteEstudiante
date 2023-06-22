import { Component } from '@angular/core';
import { EstudianteServiceService } from 'src/app/servicios/estudiante-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {
  estudiantesList:any = [];
  id: any;
  constructor(private estudiante: EstudianteServiceService,private router: Router){

  }

  ngOnInit(){
    console.log('El componente se ha inicializado');
    
    this.estudiante.getEstudiantes().subscribe(x => this.estudiantesList = x);
  }
  deleteEstudiante(id: number){
    this.estudiante.deleteEstudiante(id)
      .subscribe(x => this.estudiante.getEstudiantes().subscribe(res => this.estudiantesList = res));
  }
}
