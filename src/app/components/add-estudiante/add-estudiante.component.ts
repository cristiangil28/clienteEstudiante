import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstudianteServiceService } from 'src/app/servicios/estudiante-service.service';

@Component({
  selector: 'app-add-estudiante',
  templateUrl: './add-estudiante.component.html'
})
export class AddEstudianteComponent {
  constructor(private formBuilder: FormBuilder, private router: Router, private service: EstudianteServiceService){
    
  }
  addForm: any;
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
    });
  }
  onSubmit() {
    this.service.createEstudiante( this.addForm.value )
      .subscribe(data => {
        this.router.navigate(['/estudiante']);
        
      });
  }
}
