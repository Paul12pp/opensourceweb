import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CandidatoModel, CapacitacionModel } from '../model/candidato.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() candidato: CandidatoModel;
  @Input() competencias: any[];
  @Input() show: any[];
  @Input() capacitacion: CapacitacionModel[] = [];
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
  }
  submit(f: NgForm) {
    console.log(f);
    console.log(this.capacitacion);
    if (f.valid) {
      console.log(this.disabled);
      const temp = this.capacitacion.filter(r => r.descripcion !== '');
      console.log(temp);
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
