import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  user = { id: '', nombre: '', apellido: '', email: '' };

  constructor(private servicio: UserService) { }

  crearUsuario() {
    console.log(this.user);
    this.servicio.crearUsuario(this.user).subscribe((result) => {
      console.log('creado');
      console.log(result);
    }, (err) => {
      console.log('error');
      console.log(err);
    });

  }

}
