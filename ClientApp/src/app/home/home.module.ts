import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import { CounterComponent } from '../counter/counter.component';
import { FetchDataComponent } from '../fetch-data/fetch-data.component';


@NgModule({
  declarations: [HomeComponent, CounterComponent, FetchDataComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
