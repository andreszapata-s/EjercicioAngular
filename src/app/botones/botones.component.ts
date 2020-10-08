import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent implements OnInit {

  @Output() emisionClick = new EventEmitter();
  public items: any[]= [1,2,3,4,5,6,7,8,9];
  constructor() { }

  // tslint:disable-next-line: typedef
  emitirClick(numero: string){
    this.emisionClick.emit(numero);
  }

  ngOnInit(): void {
  }

}
