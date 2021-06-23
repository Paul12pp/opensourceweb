import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteComponent } from './reporte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { NgxPrintModule } from 'ngx-print';



@NgModule({
  declarations: [ReporteComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReporteRoutingModule,
    NgxPrintModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
})
export class ReporteModule { }
