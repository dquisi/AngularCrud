import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user: any;

  constructor(private servicio: UserService, private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this.consultarDatosID(id);
  }

  consultarDatosID(id) {
    this.servicio.obtenerUsuario(id)
      .subscribe(resultado => {
        this.user = resultado;
      }, (err) => {
        console.log(err);
      }
      );
  }

  editarUsuario() {
    this.servicio.editarUsuario(this.user).subscribe((result) => {
      this.router.navigate(['/tabs/tab2?refresh=1']);
    }, (err) => {
      console.log('error');
      console.log(err);
    });
  }

}
