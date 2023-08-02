import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { MateriaService } from 'src/app/servicios/materia/materia.service';
import { MatriculaService } from 'src/app/servicios/matricula/matricula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent {
  materiasList:any = [];
  id: any;
  rol : any;
  constructor(private materia : MateriaService, private router: Router, private cookie : CookieService, private matriculaService : MatriculaService){
    this.materia.getMaterias().subscribe(x => this.materiasList = x);
  }
  ngOnInit(){
    this.rol = this.cookie.get('rol');
  }
  deleteMateria(id:number){
    this.materia.deleteMateria(id).subscribe(y => this.materia.getMaterias().subscribe(x => this.materiasList = x));
  }
  matricularMateria(idMateria : number){
    console.log(idMateria);
    this.matriculaService.matricularMateria(parseInt(this.cookie.get('id')),idMateria).subscribe(data => {
      console.log(data);
      if(data.error){
        Swal.fire({
          title: 'Error!',
          text: 'La materia ya se encuentra matriculada',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }else{
        Swal.fire({
          title: 'Exitosamente',
          text: 'Se ha matriculado la materia',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    });
  }
}
