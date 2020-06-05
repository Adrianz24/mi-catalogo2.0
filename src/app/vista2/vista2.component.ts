import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;

  closeResult = '';

  constructor() { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  onSelect(auto: Automovil) {
    this.autoSeleccionado = auto;
  }

}
