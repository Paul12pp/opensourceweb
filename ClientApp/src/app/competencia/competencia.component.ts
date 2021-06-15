import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CompetenciaModel } from './model/competencia.model';
import { CompetenciaService } from './services/competencia.service';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent implements OnInit {
  competencias: any[] = [];
  competencia: CompetenciaModel = { id: 0, descripcion: '', estado: true };
  constructor(
    private services: CompetenciaService) { }

  ngOnInit() {
    this.services.get()
      .subscribe(result => {
        console.log(result);
        this.competencias = result;
      });
  }
  refresh() {
    this.competencias = [];
    this.services.get().subscribe(result => {
      this.competencias = result;
      console.log('result', this.competencias);
    });
  }
  submit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(form.valid);
    const id = form.value.id;
    if (form.valid) {
      Swal.fire({
        title: 'Procesando',
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        }
      });
      const values = form.value;
      delete values.id;
      values.estado = values.estado === 'true' ? true : false;
      console.log('aqui', values);
      if (id !== null && id !== 0) {
        this.services.edit(id, values).subscribe(result => {
          console.log(result);
          form.resetForm();
          this.refresh();
          Swal.close();
          console.log('after', this.competencia);
        });
      } else {
        this.services.post(values).subscribe(result => {
          console.log(result);
          form.resetForm();
          this.refresh();
          Swal.close();
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incompletos o erroneos.',
      });
    }
  }
  edit(id: number) {
    Swal.fire({
      title: 'Obtenindo datos',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    this.services.getById(id).subscribe(result => {
      this.competencia = result;
      console.log('competencia', this.competencia);
      Swal.close();
    });
    console.log('edit');
  }

}
