import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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
  rol : any;
  constructor(private materia : MateriaService, private router: Router, private cookie : CookieService){
    this.materia.getMaterias().subscribe(x => this.materiasList = x);
  }
  ngOnInit(){
    this.rol = this.cookie.get('rol');
  }
  deleteMateria(id:number){
    this.materia.deleteMateria(id).subscribe(y => this.materia.getMaterias().subscribe(x => this.materiasList = x));
  }
}
