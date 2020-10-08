import { Component, OnInit } from '@angular/core';
import { ConsultarPersonasService } from '../consultar-personas.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  public numero;
  public personas: any[] = [];

  constructor(public service: ConsultarPersonasService) { }

  // tslint:disable-next-line: typedef
  recibirDato(valor){
    this.numero = valor;
    console.log(this.numero);
    this.consultar(this.numero);
  }

  ngOnInit(): void {
  }

  consultar(numero): void {
    this.service.obtenerDatos(numero).subscribe(res => console.log(res));
    this.service.obtenerDatos(numero).subscribe(res => this.personas = res.results);
  }
}
