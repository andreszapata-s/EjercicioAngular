import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultarPersonasService {

  public urlApi: string = environment.Url;

  constructor(public http: HttpClient) { }

  public obtenerDatos(numero): Observable<any>{
    return this.http.get<any>(this.urlApi + numero);
  }
}
