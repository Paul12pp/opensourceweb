import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { IdiomaModule } from './idioma/idioma.module';
import { CandidatoModule } from './candidato/candidato.module';
import { ApiAuthorizationModule } from '../api-authorization/api-authorization.module';
import { CompetenciaModule } from './competencia/competencia.module';
import { PuestoModule } from './puesto/puesto.module';
import { EmpleadoModule } from './empleado/empleado.module';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'idioma',
    loadChildren: () =>
      import('./idioma/idioma.module').then(m => m.IdiomaModule)
  },
  {
    path: 'candidato',
    loadChildren: () =>
      import('./candidato/candidato.module').then(m => m.CandidatoModule)
  },
  {
    path: 'competencia',
    loadChildren: () =>
      import('./competencia/competencia.module').then(m => m.CompetenciaModule)
  },
  {
    path: 'puesto',
    loadChildren: () =>
      import('./puesto/puesto.module').then(m => m.PuestoModule)
  },
  {
    path: 'empleado',
    loadChildren: () =>
      import('./empleado/empleado.module').then(m => m.EmpleadoModule)
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('../api-authorization/api-authorization.module').then(
        m => m.ApiAuthorizationModule
      )
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
