import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from 'src/app/modelos/materia/materia';
import { MateriaService } from 'src/app/servicios/materia/materia.service';

@Component({
  selector: 'app-edit-materia',
  templateUrl: './edit-materia.component.html',
  styleUrls: ['./edit-materia.component.scss']
})
export class EditMateriaComponent {
  materia : any;
  addForm: any;
  id: any;
  constructor(private activeRouter: ActivatedRoute,private formBuilder: FormBuilder, private router: Router,private service: MateriaService){
    this.materia = new Materia();
  }
  ngOnInit(){
    
    if(this.activeRouter.snapshot.paramMap.get('id') != null){
      this.id = this.activeRouter.snapshot.paramMap.get('id');
      this.service.getMateria(this.id).subscribe(data => this.materia = data);
    }
    this.addForm = this.formBuilder.group({
      id: [],
      nombreMateria: ['', Validators.required],
      creditos: ['', Validators.required]
    });
  }
  onSubmit() {
    console.log(this.addForm.value.id);
    this.service.updateMateria( this.addForm.value.id,this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['/materias']);
        
      });
  }
}
