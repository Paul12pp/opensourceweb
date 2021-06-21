import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaRoutingModule } from './consulta-routing.module';
import { ConsultaComponent } from './consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [ConsultaComponent],
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
export class ConsultaModule { }
