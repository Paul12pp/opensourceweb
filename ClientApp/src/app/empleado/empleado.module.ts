import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoRoutingModule } from './empleado-routing.module';
import { EmpleadoComponent } from './empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EmpleadoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EmpleadoRoutingModule
  ]
})
export class EmpleadoModule { }
