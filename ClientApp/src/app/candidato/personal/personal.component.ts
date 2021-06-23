import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CandidatoModel } from '../model/candidato.model';
import { ValidateTool } from '../../utils/validate-tool';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  @Input() candidato: CandidatoModel;
  @Input() departamentos: any[];
  @Input() puestos: any[];
  @Input() show: any[];
  constructor() { }

  ngOnInit() {
  }
  submit(f: NgForm) {
    // console.log(f.value);
    // alert(this.validaCedula(f.value.cedula));
    if (ValidateTool.validDominicanID(f.value.cedula)) {
      if (f.valid) {
        this.changeTab(1);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos incompletos o erroneos.',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cédula invalida',
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

  pattern(value: any) {
    console.log(value)
    this.candidato.cedula = value.replace(/[^0-9]*/g, '');
  }
}
