import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { DepartamentoModel, PuestoModel } from '../puesto/model/puesto.model';
import { EmpleadoModel } from './model/empleado.model';
import { EmpleadoService } from './services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  empleados: any[] = [];
  empleado: EmpleadoModel = {
    id: 0, nombre: '',
    estado: true, cedula: '', fecha_Ing: '', puesto: '', departamentoId: 0,
    salario_M: 0
  };
  departamentos: DepartamentoModel[] = [];
  puestos: PuestoModel[] = [];
  constructor(private services: EmpleadoService) { }

  ngOnInit() {
    this.services.get()
      .subscribe(result => {
        console.log(result);
        this.empleados = result;
      });
    this.services.getDpt().subscribe(result => this.departamentos = result);
    this.services.getPt().subscribe(result => this.puestos = result);
  }
  refresh() {
    this.empleados = [];
    this.services.get().subscribe(result => {
      this.empleados = result;
      console.log('result', this.empleados);
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
          console.log('after', this.empleado);
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
      this.empleado = result;
      this.empleado.fecha_Ing=moment(this.empleado.fecha_Ing).format('yyyy-MM-dd');
      console.log('empleado', this.empleado);
      Swal.close();
    });
    console.log('edit');
  }

  pattern(value:any){
    console.log(value)
    this.empleado.cedula= value.replace(/[^0-9]*/g, '');
  }

}
