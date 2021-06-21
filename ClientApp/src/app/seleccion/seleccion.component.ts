import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { CandidatoService } from '../candidato/services/candidato.service';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.css']
})
export class SeleccionComponent implements OnInit {

  candidatos: [] = [];
  puestos: [] = [];
  candidato: any;
  puesto: string = '';
  constructor(private services: CandidatoService) { }
  ngOnInit() {
    this.candidato = null;
    this.services.get()
      .subscribe(result => {
        console.log(result);
        this.candidatos = result;
      });
    this.services.getPt()
      .subscribe(result => {
        console.log(result);
        this.puestos = result;
      });
  }

  refresh() {
    // Swal.fire({
    //   title: 'Procesando',
    //   showConfirmButton: false,
    //   willOpen: () => {
    //     Swal.showLoading();
    //   }
    // });
    this.services.get()
      .subscribe(result => {
        console.log(result);
        this.candidatos = result;
        //Swal.close();

      });
  }
  filtrar() {
    if (this.puesto != '') {
      Swal.fire({
        title: 'Procesando',
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        }
      });
      this.services.getByPuestos(Number(this.puesto))
        .subscribe(result => {
          console.log(result);
          this.candidatos = result;
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
  getbyId(id: number) {
    this.services.getById(id)
      .subscribe(result => {
        this.candidato = result;
      });
  }

  aprobar(id: number) {
    Swal.fire({
      title: 'Procesando',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    this.services.aprobar({id})
      .subscribe(result => {
        this.refresh();
        Swal.close();
      })
  }
  rechazar(id: number) {
    Swal.fire({
      title: 'Procesando',
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      }
    });
    this.services.rechazar({id})
      .subscribe(result => {
        this.refresh();
        Swal.close();
      })
  }
}
