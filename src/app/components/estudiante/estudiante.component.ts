import { Component } from '@angular/core';
import { EstudianteServiceService } from 'src/app/servicios/estudiante-service.service';
import { Router} from '@angular/router';
import { filter } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { MatIconModule } from "@angular/material/icon";
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent {
  estudiantesList:any = [];
  materiasSuscritasLis = [];
  materiasSuscritasListFinal = [];
  id: any;
  x : any;
  usuario : any;
  rol : any;
  constructor(private estudiante: EstudianteServiceService,private router: Router, private cookie : CookieService){
  }
  ngOnInit(){
    console.log('El componente se ha inicializado');
    console.log('cookie: '+this.cookie.get('name'));
    if(!this.cookie.get('id')){
      console.log('no existe');
      this.router.navigate(['/login']);
    }
    this.usuario = this.cookie.get('id');
    this.rol = this.cookie.get('rol');
    this.estudiante.getEstudiantes().subscribe(x => this.estudiantesList = x);
    
  }
  deleteEstudiante(id: number){
    this.estudiante.deleteEstudiante(id)
      .subscribe(x => this.estudiante.getEstudiantes().subscribe(res => this.estudiantesList = res));
  }
  getMateriasInscritas(id: number){
    console.log(id);
    this.estudiante.getEstudiantes().subscribe(y => this.estudiantesList = y);
    this.materiasSuscritasLis = this.estudiantesList.filter((val: any) => {return val.id == id});
    this.materiasSuscritasLis = this.materiasSuscritasLis[0]['materias'];
    console.log(this.materiasSuscritasLis.length)
    for(this.x = 0 ; this.x < this.materiasSuscritasLis.length; this.x++){
      this.materiasSuscritasListFinal.push(this.materiasSuscritasLis[this.x]);
    }
    this.router.navigate(['/mostrarMaterias']);
    console.log(this.materiasSuscritasListFinal)
  }
}
