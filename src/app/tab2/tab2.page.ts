import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  users: any[];

  constructor(private servicio: UserService, private router: Router) {
    this.listarUsuario();
  }


  listarUsuario() {
    this.servicio.listarUsuario()
      .subscribe(resultado => {
        this.users = resultado;
      }, (err) => {
        console.log(err);
      }
      );
  }

  eliminarUsuario(id) {
    this.servicio.elminarUsuario(id)
      .subscribe(resultado => {
        this.listarUsuario();
      }, (err) => {
        console.log(err);
      }
      );
  }
  editarUsuario(id) {
    this.router.navigate(['tabs/tab3/' + id]);
  }


}
