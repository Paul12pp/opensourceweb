import { Component, OnInit } from '@angular/core';
import { CandidatoModel } from './model/candidato.model';
import { CandidatoService } from './services/candidato.service';

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
    estado: false,
  };
  departamentos: any[] = [];
  constructor(private services: CandidatoService) { }

  ngOnInit() {
    this.show = [true, false, false];
    this.services.getDpt()
      .subscribe(result => this.departamentos = result);
  }
  changeTab(id: number) {
    this.show.forEach((element, i) => {
      this.show[i] = false;
    });
    this.show[id] = true;
    console.log(this.candidato);
  }

}
