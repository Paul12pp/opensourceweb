import { Component, Input, OnInit } from '@angular/core';
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
  experiencia: ExperienciaModel[] = [];
  constructor() { }

  ngOnInit() {
  }
  submit(f: NgForm) {
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

}
