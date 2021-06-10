import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaRoutingModule } from './idioma-routing.module';
import { IdiomaComponent } from './idioma.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [IdiomaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IdiomaRoutingModule
  ],
})
export class IdiomaModule { }
