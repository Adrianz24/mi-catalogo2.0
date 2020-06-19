import { Component, OnInit } from '@angular/core';
/*import { AUTOMOVILES } from '../data';*/
import { Automovil } from '../models';
import { AutosService } from '../autos.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']
})
export class Vista2Component implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  page: number = 1;
  pageSize: number = 10; 

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


