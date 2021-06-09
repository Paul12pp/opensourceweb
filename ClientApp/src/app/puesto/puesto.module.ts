import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuestoRoutingModule } from './puesto-routing.module';
import { PuestoComponent } from './puesto.component';



@NgModule({
  declarations: [PuestoComponent],
  imports: [
    CommonModule,
    PuestoRoutingModule
  ]
})
export class PuestoModule { }
