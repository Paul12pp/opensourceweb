import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuestoRoutingModule } from './puesto-routing.module';
import { PuestoComponent } from './puesto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PuestoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PuestoRoutingModule
  ]
})
export class PuestoModule { }
