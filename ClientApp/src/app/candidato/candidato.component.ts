import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CandidatoModel, CapacitacionModel, ExperienciaModel, CandidatoInputDto } from './model/candidato.model';
import { CandidatoService } from './services/candidato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  show: any[];
  candidato: CandidatoModel = {
    id: 0,
    cedula: '',
    nombre: '',
    puestoId: 0,
    departamentoId: 0,
    salario_Asp: 0,
    competencias: '',
    recomendado_p: '',
  };
  departamentos: any[] = [];
  puestos: any[] = [];
  competencias: any[] = [];
  capacitacion: CapacitacionModel[];
  experiencia: ExperienciaModel[] = [];
  validFull = false;
  constructor(private services: CandidatoService, private router: Router) { }

  ngOnInit() {
    this.show = [true, false, false];
    this.services.getDpt()
      .subscribe(result => this.departamentos = result);
    this.services.getPt()
      .subscribe(result => this.puestos = result);
    this.services.getCpt()
      .subscribe(result => this.competencias = result);
  }
  changeTab(id: number) {
    // this.show.forEach((element, i) => {
    //   this.show[i] = false;
    // });
    // this.show[id] = true;
    // console.log(this.candidato);
  }
  onSubmitFull(data: any) {
    this.capacitacion = data;
    console.log(this.capacitacion);
  }
  onSubmitFull2(data: any) {
    this.experiencia = data;
    console.log(this.experiencia);
    Swal.fire({
      title: 'Procesando',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    const dataInput: CandidatoInputDto = {
      candidato: this.candidato,
      experiencia: this.experiencia,
      capacitacion: this.capacitacion
    }
    this.services.post(dataInput)
      .subscribe(result => {
        Swal.close();
        this.router.navigate(['/']);
      });
  }

}
