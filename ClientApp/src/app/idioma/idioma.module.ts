import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaRoutingModule } from './idioma-routing.module';
import { IdiomaComponent } from './idioma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';



@NgModule({
  declarations: [IdiomaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IdiomaRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
})
export class IdiomaModule { }
