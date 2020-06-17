import { Component, OnInit } from '@angular/core';
/*import { AUTOMOVILES } from '../data';*/
import { Automovil } from '../models';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;

  closeResult = '';

  constructor(private autoService: AutosService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
        this.autos = response.data;
    });
  }

  onSelect(auto: Automovil) {
    this.autoSeleccionado = auto;
  }

}
