import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
// import { CounterComponent } from '../counter/counter.component';
// import { FetchDataComponent } from '../fetch-data/fetch-data.component';
// import { HomeComponent } from './home.component';

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: 'counter', component: CounterComponent },
  // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule {}
