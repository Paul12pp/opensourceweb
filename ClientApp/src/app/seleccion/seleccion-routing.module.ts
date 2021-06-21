import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// import { CounterComponent } from '../counter/counter.component';
// import { FetchDataComponent } from '../fetch-data/fetch-data.component';
// import { HomeComponent } from './home.component';
import { SeleccionComponent } from './seleccion.component';

const routes: Routes = [
  { path: '', component: SeleccionComponent, pathMatch: 'full', canActivate: [AuthorizeGuard] },
  { path: 'seleccion', component: SeleccionComponent, canActivate: [AuthorizeGuard] },
  // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
