import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaRoutingModule } from './competencia-routing.module';
import { CompetenciaComponent } from './competencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CompetenciaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompetenciaRoutingModule
  ]
})
export class CompetenciaModule { }
