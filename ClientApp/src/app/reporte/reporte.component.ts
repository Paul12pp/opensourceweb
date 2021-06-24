import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { EmpleadoService } from '../empleado/services/empleado.service';
import { SearchEmpleadoInputModel } from '../empleado/model/empleado.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html'
})
export class ReporteComponent implements OnInit {

  data: SearchEmpleadoInputModel = { desde: '', hasta: '' };
  empleados: any[] = [];
  constructor(private services: EmpleadoService) { }

  ngOnInit() {
    // this.services.search({ desde: moment(new Date()).format('YYYY-MM-DD'), hasta: moment(new Date()).format('YYYY-MM-DD') })
    //   .subscribe(result => {
    //     console.log(result);
    //   });
  }
  submit(form: NgForm) {
    console.log(form.value);
    const { desde, hasta } = this.data;
    this.data.desde = moment(this.data.desde).format('YYYY-MM-DD');
    this.data.hasta = moment(this.data.hasta).format('YYYY-MM-DD');
    if (form.valid && desde < hasta) {
      Swal.fire({
        title: 'Procesando',
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        }
      });
      this.data.desde = moment(this.data.desde).format('YYYY-MM-DD');
      this.data.hasta = moment(this.data.hasta).format('YYYY-MM-DD');
      this.services.search(this.data)
        .subscribe(result => {
          this.empleados = result;
          Swal.close();
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Datos incompletos o erroneos.',
      });
    }
  }
}

