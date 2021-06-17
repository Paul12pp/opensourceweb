import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaRoutingModule } from './competencia-routing.module';
import { CompetenciaComponent } from './competencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [CompetenciaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetenciaRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
})
export class CompetenciaModule { }
