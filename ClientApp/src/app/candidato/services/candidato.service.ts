import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoutes, getRoute } from 'src/app/core/api.routes';
import { CandidatoModel, CapacitacionInputModel, ExperienciaModel } from '../model/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private route = '';
  constructor(private http: HttpClient) {
    console.log('candidato services ready');
    console.log(getRoute(apiRoutes.candidato.get));
  }
  get(): Observable<any> {
    this.route = getRoute(apiRoutes.candidato.get);
    return this.http.get<any>(this.route);
  }
  getById(id: number): Observable<CandidatoModel> {
    this.route = getRoute(apiRoutes.candidato.get);
    return this.http.get<any>(this.route + `/${id}`);
  }
  getByPuestos(id: number) {
    this.route = getRoute(apiRoutes.candidato.getbypuestos);
    return this.http.get<any>(this.route + `/${id}`);
  }
  getbycedula(id: number) {
    this.route = getRoute(apiRoutes.candidato.getbycedula);
    return this.http.get<any>(this.route + `/${id}`);
  }
  getexpbycandidato(id: number) {
    this.route = getRoute(apiRoutes.candidato.getexpbycandidato);
    return this.http.get<any>(this.route + `/${id}`);
  }
  getcapbycandidato(id: number) {
    this.route = getRoute(apiRoutes.candidato.getcapbycandidato);
    return this.http.get<any>(this.route + `/${id}`);
  }
  post(data: CandidatoModel) {
    this.route = getRoute(apiRoutes.candidato.post);
    return this.http.post(this.route, data);
  }
  postexp(data: ExperienciaModel) {
    this.route = getRoute(apiRoutes.candidato.postexp);
    return this.http.post(this.route, data);
  }
  postcap(data: CapacitacionInputModel) {
    this.route = getRoute(apiRoutes.candidato.postexp);
    return this.http.post(this.route, data);
  }
  edit(id: number, data: CandidatoModel) {
    this.route = getRoute(apiRoutes.candidato.edit);
    return this.http.post(this.route + `/${id}`, data);
  }
  delete(id: number) {
    this.route = getRoute(apiRoutes.candidato.delete);
    return this.http.delete(this.route + `/${id}`);
  }
  aprobar(id: number) {
    this.route = getRoute(apiRoutes.candidato.aprobar);
    return this.http.delete(this.route + `/${id}`);
  }
  rechazar(id: number) {
    this.route = getRoute(apiRoutes.candidato.rechazar);
    return this.http.delete(this.route + `/${id}`);
  }
}
