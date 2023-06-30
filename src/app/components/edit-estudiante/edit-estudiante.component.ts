import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Estudiante } from 'src/app/modelos/estudiante';
import { EstudianteServiceService } from 'src/app/servicios/estudiante-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-estudiante',
  templateUrl: './edit-estudiante.component.html'
})
export class EditEstudianteComponent {
  estudiante: any;
  addForm: any;
  id: any;
  constructor(private activeRouter: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private service: EstudianteServiceService) {
    this.estudiante = new Estudiante();
  }


  ngOnInit() {
    if (this.activeRouter.snapshot.paramMap.get('id') != null) {
      this.id = this.activeRouter.snapshot.paramMap.get('id');
      this.service.getEstudiante(parseInt(this.id)).subscribe(data => this.estudiante = data);
    }

    this.addForm = this.formBuilder.group({
      id: [],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      documento: ['', Validators.required]
    });

    console.log(this.activeRouter.snapshot.paramMap.get('id'));
  }
  onSubmit() {

    if (this.addForm.valid) {
      this.service.updateEstudiante(this.addForm.value.id, this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['/']);
        });
      Swal.fire({
        title: 'Exitosamente',
        text: 'Se ha guardado la materia',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Faltan Datos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }
}
