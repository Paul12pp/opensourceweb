import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRoutingModule } from './seleccion-routing.module';
import {  SeleccionComponent } from './seleccion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [SeleccionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ConsultaRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
})
export class SeleccionModule { }
