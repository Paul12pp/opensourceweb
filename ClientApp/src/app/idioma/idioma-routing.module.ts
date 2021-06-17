import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// import { CounterComponent } from '../counter/counter.component';
// import { FetchDataComponent } from '../fetch-data/fetch-data.component';
// import { HomeComponent } from './home.component';
import { IdiomaComponent } from './idioma.component';

const routes: Routes = [
  { path: '', component: IdiomaComponent, pathMatch: 'full',canActivate: [AuthorizeGuard] },
  { path: 'idioma', component: IdiomaComponent, canActivate: [AuthorizeGuard]},
  { path: ':id', component: IdiomaComponent,canActivate: [AuthorizeGuard] },
  // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdiomaRoutingModule {}
