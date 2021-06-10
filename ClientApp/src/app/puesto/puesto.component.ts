import { Component, OnInit } from '@angular/core';
import { PuestoService } from './services/puesto.service';
import { PuestoModel } from './model/puesto.model';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.css']
})
export class PuestoComponent implements OnInit {
  puestos: any[] = [];
  puesto: PuestoModel = { id: 0, nombre: '', estado: true, nivel_Riesgo: '', nivel_Ma_Salarial: 0, nivel_Mi_Salarial: 0 };
  constructor(private services: PuestoService) { }

  ngOnInit() {
    this.services.get()
    .subscribe(result => {
      console.log(result);
      this.puesto = result;
    });
  }
  refresh() {
    this.puestos = [];
    this.services.get().subscribe(result => {
      this.puestos = result;
      console.log('result', this.puestos);
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
          console.log('after', this.puesto);
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
      this.puesto = result;
      console.log('puesto', this.puesto);
      Swal.close();
    });
    console.log('edit');
  }

}
