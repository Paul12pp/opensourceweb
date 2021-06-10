import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PARAM_KEY_ID, routeParamFactory, ROUTE_PARAM_TOKEN } from '../core/tokens/route-param.token';
import { IdiomaService } from './services/idioma.service';
import { IdiomaModel } from './model/idioma.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css'],
  providers: [
    {
      provide: ROUTE_PARAM_TOKEN,
      useFactory: routeParamFactory,
      deps: [ActivatedRoute, PARAM_KEY_ID]
      // if you want to get someId, the deps will be
      // deps: [ActivatedRoute, PARAM_KEY_SOME_ID]
    }
  ]
})
export class IdiomaComponent implements OnInit {
  idiomas: any[] = [];
  idioma: IdiomaModel = { id: 0, nombre: '', estado: true };
  constructor(@Inject(ROUTE_PARAM_TOKEN)
  private readonly id$: Observable<string>,
    private services: IdiomaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id$.subscribe(id => console.log(id));
    // console.log(this.route.snapshot.paramMap.get('id'));
    this.services.get()
      .subscribe(result => {
        console.log(result);
        this.idiomas = result;
      });
  }
  refresh() {
    this.idiomas = [];
    this.services.get().subscribe(result => {
      this.idiomas = result;
      console.log('result', this.idiomas);
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
          console.log('after', this.idioma);
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
      this.idioma = result;
      console.log('idioma', this.idioma);
      Swal.close();
    });
    console.log('edit');
  }

}
