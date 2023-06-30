import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteServiceService } from 'src/app/servicios/estudiante-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html'
})
export class AddEstudianteComponent {
  constructor(private formBuilder: FormBuilder, private router: Router, private service: EstudianteServiceService) {

  }
  addForm: any;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      tipoUsuario: ['', Validators.required],
      documento: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.addForm.valid) {
      this.service.createEstudiante(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['/']);

        });
      Swal.fire({
        title: 'Exitosamente',
        text: 'Se ha guardado el estudiante',
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
