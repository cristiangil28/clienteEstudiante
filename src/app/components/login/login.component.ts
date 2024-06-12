import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from 'src/app/servicios/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  name_cookie : any;
  addForm : any;
  constructor(private cookie: CookieService, private loginService : LoginService, private formBuilder: FormBuilder,private router: Router){

  }
  setCookies(){
    this.cookie.set('name','Tutorialswebsite');
  }
  ngOnInit(){
    this.setCookies();
    this.name_cookie = this.cookie.getAll();
    this.addForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit(){
    if(!this.addForm.valid){
      Swal.fire({
        title: 'Error!',
        text: 'Faltan Datos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else{
      this.loginService.getUsuarioLogin(this.addForm.value.usuario, this.addForm.value.password).subscribe(data =>{
        if(data != null){
          this.cookie.set('id',data.id);
          this.cookie.set('rol',data.tipoUsuario);
          this.router.navigate(['/']);
          console.log(data);
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'No se puede iniciar sesión',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      });
    }
  }
}
