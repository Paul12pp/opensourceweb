import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EmpleadoComponent } from './empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';



@NgModule({
  declarations: [EmpleadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpleadoRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
})
export class EmpleadoModule { }
