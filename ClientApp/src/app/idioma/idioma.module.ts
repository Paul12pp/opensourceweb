import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomaRoutingModule } from './idioma-routing.module';
import { IdiomaComponent } from './idioma.component';



@NgModule({
  declarations: [IdiomaComponent],
  imports: [
    CommonModule,
    IdiomaRoutingModule
  ]
})
export class IdiomaModule { }
