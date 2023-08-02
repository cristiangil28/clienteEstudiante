import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  usuario : any;
  rol : any;
  constructor(private cookie : CookieService, private router: Router){

  }
  ngOnInit(){
    this.usuario = this.cookie.get('id');
    this.rol = this.cookie.get('rol');
  }
  cerrarSesion(){
    this.cookie.delete('id');
    this.router.navigate(['/login']);
    console.log('cerrar sersion');
  }
}
