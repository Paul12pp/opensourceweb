import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CandidatoModel } from '../model/candidato.model';

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
    if (f.valid) {
      this.changeTab(1);
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
  validaCedula(pCedula: string) {
    console.log(pCedula);
    let vnTotal = 0;
    const vcCedula = pCedula.replace('-', '');
    const pLongCed = vcCedula.trim().length;
    const digitoMult = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

    if (pLongCed < 11 || pLongCed > 11) {
      return false;
    }

    for (let vDig = 1; vDig <= pLongCed; vDig++) {
      const vCalculo = Number(vcCedula.substring(vDig - 1, 1)) * digitoMult[vDig - 1];
      if (vCalculo < 10) {
        vnTotal += vCalculo;
      } else {
        vnTotal += Number(vCalculo.toString().substring(0, 1)) + Number(vCalculo.toString().substring(1, 1));
      }
    }

    if (vnTotal % 10 === 0) {
      return true;
    } else {
      return false;
    }
  }
}
