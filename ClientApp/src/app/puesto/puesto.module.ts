import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuestoRoutingModule } from './puesto-routing.module';
import { PuestoComponent } from './puesto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';



@NgModule({
  declarations: [PuestoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PuestoRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
})
export class PuestoModule { }
