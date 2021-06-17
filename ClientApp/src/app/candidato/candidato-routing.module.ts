import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidatoComponent } from './candidato.component';


const routes: Routes = [
  { path: '', component: CandidatoComponent, pathMatch: 'full' },
  { path: 'candidato', component: CandidatoComponent },
  // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatoRoutingModule {}
