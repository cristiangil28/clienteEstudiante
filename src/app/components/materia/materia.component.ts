import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MateriaService } from 'src/app/servicios/materia/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent {
  materiasList:any = [];
  id: any;
  constructor(private materia : MateriaService, private router: Router){
    this.materia.getMaterias().subscribe(x => this.materiasList = x);
  }

  deleteMateria(id:number){
    this.materia.deleteMateria(id).subscribe(y => this.materia.getMaterias().subscribe(x => this.materiasList = x));
  }
}
