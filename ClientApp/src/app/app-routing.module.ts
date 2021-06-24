import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: 'consulta',
    loadChildren: () =>
      import('./consulta/consulta.module').then(m => m.ConsultaModule)
  },
  {
    path: 'seleccion',
    loadChildren: () =>
      import('./seleccion/seleccion.module').then(m => m.SeleccionModule)
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('../api-authorization/api-authorization.module').then(
        m => m.ApiAuthorizationModule
      )
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then(
        m => m.LandingModule
      )
  },
  {
    path: 'reporte',
    loadChildren: () =>
      import('./reporte/reporte.module').then(
        m => m.ReporteModule
      )
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
