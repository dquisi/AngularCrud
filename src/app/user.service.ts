import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { of, throwError, from, Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  crearUsuario(user: any): Observable<any> {
    return this.http.post(this.url, user, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
  listarUsuario(): Observable<any> {
    return this.http.get(this.url, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
  elminarUsuario(id: any): Observable<any> {
    return this.http.delete(this.url + '/' + id, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
  editarUsuario(user: any): Observable<any> {
    return this.http.put(this.url + '/' + user.id, user, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
  obtenerUsuario(id: any): Observable<any> {
    return this.http.get(this.url + '/' + id, httpOptions)
      .pipe(
        catchError(err => {
          console.log(err);
          return throwError(err);
        })
      );
  }
}
