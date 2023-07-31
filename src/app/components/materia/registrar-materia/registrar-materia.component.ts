import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudianteServiceService } from 'src/app/servicios/estudiante-service.service';
import { MateriaService } from 'src/app/servicios/materia/materia.service';
import { MatriculaService } from 'src/app/servicios/matricula/matricula.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-materia',
  templateUrl: './registrar-materia.component.html'
})
export class RegistrarMateriaComponent {
  estudiante: any;
  estudianteList :any = [];
  addForm: any;
  id: any;
  valid : boolean = false;
  constructor(private activeRouter: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private service: EstudianteServiceService, private materiaService : MateriaService, private matriculaService : MatriculaService){
   
  }

  ngOnInit(){
    if (this.activeRouter.snapshot.paramMap.get('id') != null) {
      this.id = this.activeRouter.snapshot.paramMap.get('id');
      this.service.getEstudiante(parseInt(this.id)).subscribe(data => this.estudiante = data);
      this.materiaService.getMaterias().subscribe(result => this.estudianteList = result);
    }
    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      documento: ['', Validators.required],
      idMateria : ['' , Validators.required]
    });
  }
  onSubmit(){
    if(this.addForm.value.idMateria.id == null){
      Swal.fire({
        title: 'Error!',
        text: 'Debe seleccionar una materia',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    
    this.matriculaService.matricularMateria(this.addForm.value.id,this.addForm.value.idMateria.id).subscribe(data => {
      console.log(data);
      if(data.error){
        Swal.fire({
          title: 'Error!',
          text: 'La materia ya se encuentra matriculada',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }else{
        this.valid = true;
        this.router.navigate(['/']);
      }
    });
    if(this.valid){
      Swal.fire({
        title: 'Exitosamente',
        text: 'Se ha matriculado la materia',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
  }
}
