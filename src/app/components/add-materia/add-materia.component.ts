import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/servicios/materia/materia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-materia',
  templateUrl: './add-materia.component.html',
  styleUrls: ['./add-materia.component.scss']
})
export class AddMateriaComponent implements OnInit {
  addForm: any;
  resultado!: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private materia: MateriaService) {

  }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nombreMateria: ['', Validators.required],
      creditos: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.addForm.valid) {
      this.resultado = 'los datos son correctos';
      this.materia.addMateria(this.addForm.value)
        .subscribe(data => {
          this.router.navigate(['/materias']);

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
