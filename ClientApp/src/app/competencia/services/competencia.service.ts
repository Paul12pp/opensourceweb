import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoutes, getRoute } from 'src/app/core/api.routes';
import { CompetenciaModel } from '../model/competencia.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

  private route = '';
  constructor(private http: HttpClient) {
    console.log('competencia services ready');
    console.log(getRoute(apiRoutes.competencia.get));
  }
  get(): Observable<any> {
    this.route = getRoute(apiRoutes.competencia.get);
    return this.http.get<any>(this.route);
  }
  getById(id: number): Observable<CompetenciaModel> {
    this.route = getRoute(apiRoutes.competencia.get);
    return this.http.get<any>(this.route + `/${id}`);
  }
  post(data: CompetenciaModel) {
    this.route = getRoute(apiRoutes.competencia.post);
    return this.http.post(this.route, data);
  }
  edit(id: number, data: CompetenciaModel) {
    this.route = getRoute(apiRoutes.competencia.edit);
    return this.http.post(this.route + `/${id}`, data);
  }
}
