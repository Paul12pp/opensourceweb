import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { SearchCandidatoInputDto } from '../candidato/model/candidato.model';
import { CandidatoService } from '../candidato/services/candidato.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  candidatos: any[] = [];
  buscar: SearchCandidatoInputDto = {
    nombre: '', competencia: '',
    puesto: 0, salarioD: 0, salarioH: 0
  }
  puestos: [] = [];
  constructor(private services: CandidatoService) { }

  ngOnInit() {
    this.services.getPt()
      .subscribe(result => {
        console.log(result);
        this.puestos = result;
      });
  }
  submit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(form.valid);
    const id = form.value.id;
    if (form.valid && this.buscar.salarioD < this.buscar.salarioH) {
      Swal.fire({
        title: 'Procesando',
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        }
      });
      const values = form.value;
      this.services.search(values)
        .subscribe(result => {
          this.candidatos = result;
          Swal.close();
        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incompletos o erroneos.',
      });
    }
  }
  limpiar() {
    this.buscar = {
      nombre: '', competencia: '',
      puesto: 0, salarioD: 0, salarioH: 0
    };

  }
}