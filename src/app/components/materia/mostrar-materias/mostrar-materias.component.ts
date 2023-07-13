import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatriculaService } from 'src/app/servicios/matricula/matricula.service';

@Component({
  selector: 'app-mostrar-materias',
  templateUrl: './mostrar-materias.component.html'
})
export class MostrarMateriasComponent {
  id: any;
  materiasInscritasList:any = [];
  
  constructor(private activeRouter: ActivatedRoute,private router: Router, private service :MatriculaService){

  }
  ngOnInit() {
    if (this.activeRouter.snapshot.paramMap.get('id') != null) {
      this.id = this.activeRouter.snapshot.paramMap.get('id');
      this.service.getMateriasMatriculadas().subscribe(data => this.materiasInscritasList = data.filter((val: any) => {return val.id == this.id})[0]['materias']);
    }
  }
}
