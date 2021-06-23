import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ValidateTool } from '../utils/validate-tool';
import Swal from 'sweetalert2';
import { CandidatoService } from '../candidato/services/candidato.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  cedula: string = '';
  validText = '';
  constructor(private services: CandidatoService) {

  }
  ngOnInit() {
    console.log('landing')
  }
  consulta() {
    this.validText = '';
    if (ValidateTool.validDominicanID(this.cedula)) {
      Swal.fire({
        title: 'Obtenindo datos',
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        }
      });
      this.services.getbycedula(this.cedula)
        .subscribe(result => {
          if (result) {
            this.validText = result.id === 0 ? 'No encontrado' : result.estado;
          } else {
            this.validText = 'No encontrado';
          }
          Swal.close();
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cédula invalida',
      });
    }
  }
  pattern(value: any) {
    this.validText = this.validText !== '' ? '' : this.validText;
    this.cedula = value.replace(/[^0-9]*/g, '');
  }
  clean() {
    this.cedula = '';
    this.validText = '';
  }
}
