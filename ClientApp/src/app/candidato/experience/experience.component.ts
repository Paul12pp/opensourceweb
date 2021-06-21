import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CandidatoModel, ExperienciaModel } from '../model/candidato.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() candidato: CandidatoModel;
  @Input() show: any[];
  @Output() public submitEvent = new EventEmitter<any[]>();
  experiencia: ExperienciaModel[] = [];
  disabled = [false, true, true];
  constructor() { }

  ngOnInit() {
    this.experiencia = [
      {
        id: 0,
        empresa: '',
        puesto: '',
        fecha_desde: '',
        fecha_hasta: '',
        salario: 0,
        idCandidato: 0,
      },
      {
        id: 0,
        empresa: '',
        puesto: '',
        fecha_desde: '',
        fecha_hasta: '',
        salario: 0,
        idCandidato: 0,
      },
      {
        id: 0,
        empresa: '',
        puesto: '',
        fecha_desde: '',
        fecha_hasta: '',
        salario: 0,
        idCandidato: 0,
      }
    ];
  }
  add(index: number) {
    this.disabled[index] = false;
  }
  quit(index: number) {
    this.disabled[index] = true;
    this.experiencia[index] = {
      id: 0,
      empresa: '',
      puesto: '',
      fecha_desde: '',
      fecha_hasta: '',
      salario: 0,
      idCandidato: 0,
    };
  }
  submit(f: NgForm) {
    console.log(f);
    console.log(this.experiencia);
    if (f.valid) {
      console.log(this.disabled);
      //this.experiencia = this.experiencia.filter(r => r.empresa !== '');
      console.log(this.experiencia);
      this.submitEvent.emit(this.experiencia.filter(r => r.empresa !== ''));
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
  }

}
