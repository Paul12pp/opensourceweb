import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaRoutingModule } from './competencia-routing.module';
import { CompetenciaComponent } from './competencia.component';



@NgModule({
  declarations: [CompetenciaComponent],
  imports: [
    CommonModule,
    CompetenciaRoutingModule
  ]
})
export class CompetenciaModule { }
