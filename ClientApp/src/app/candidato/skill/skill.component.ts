import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { CandidatoModel, CapacitacionModel } from '../model/candidato.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() candidato: CandidatoModel;
  @Input() competencias: [];
  @Input() show: any[];
  capacitacion: CapacitacionModel[] = [];
  @Output() public submitEvent = new EventEmitter<any[]>();
  // capacitacion: CapacitacionModel[] = [];
  disabled = [false, true, true];
  constructor() { }

  ngOnInit() {
    this.capacitacion = [
      {
        id: 0, descripcion: '', fecha_desde: '',
        fecha_hasta: '', institucion: '', idCandidato: this.candidato.id,
        nivel: ''
      },
      {
        id: 0, descripcion: '', fecha_desde: '',
        fecha_hasta: '', institucion: '', idCandidato: this.candidato.id,
        nivel: ''
      },
      {
        id: 0, descripcion: '', fecha_desde: '',
        fecha_hasta: '', institucion: '', idCandidato: this.candidato.id,
        nivel: ''
      }
    ];
  }

  add(index: number) {
    this.disabled[index] = false;
  }
  quit(index: number) {
    this.disabled[index] = true;
    this.capacitacion[index] = {
      id: 0, descripcion: '', fecha_desde: '',
      fecha_hasta: '', institucion: '', idCandidato: this.candidato.id,
      nivel: ''
    };
  }
  submit(f: NgForm) {
    console.log(f);
    console.log(this.capacitacion);
    const desde = moment(this.capacitacion[0].fecha_desde).format('YYYY-MM-DD');
    const hasta = moment(this.capacitacion[0].fecha_hasta).format('YYYY-MM-DD');
    if (f.valid && desde < hasta) {
      console.log(this.disabled);
      this.capacitacion = this.capacitacion.filter(r => r.descripcion !== '');
      const values = f.value;
      this.candidato.competencias = '';
      values.competencias.forEach((element, i) => {
        this.candidato.competencias += i === (values.length - 1) ? element : element + ', ';
      });
      console.log(this.capacitacion);
      this.submitEvent.emit(this.capacitacion);
      this.changeTab(2);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incompletos o erroneos.',
      });
    }
  }
  changeTab(id: number) {
    this.show.forEach((element, i) => {
      this.show[i] = false;
    });
    this.show[id] = true;
    console.log(this.candidato);
  }

}
