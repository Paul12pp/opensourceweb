import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoutes, getRoute } from 'src/app/api.routes';
import { PuestoModel, DepartamentoModel } from '../model/puesto.model';

@Injectable({
  providedIn: 'root'
})
export class PuestoService {
  private route = '';
  constructor(private http: HttpClient) {
    console.log('puesto services ready');
    console.log(getRoute(apiRoutes.puesto.get));
  }
  get(): Observable<any> {
    this.route = getRoute(apiRoutes.puesto.get);
    return this.http.get<any>(this.route);
  }
  getById(id: number): Observable<PuestoModel> {
    this.route = getRoute(apiRoutes.puesto.get);
    return this.http.get<any>(this.route + `/${id}`);
  }
  getDpt(): Observable<DepartamentoModel> {
    this.route = getRoute(apiRoutes.puesto.getdpt);
    return this.http.get<any>(this.route);
  }
  post(data: PuestoModel) {
    this.route = getRoute(apiRoutes.puesto.post);
    return this.http.post(this.route, data);
  }
  edit(id: number, data: PuestoModel) {
    this.route = getRoute(apiRoutes.puesto.edit);
    return this.http.post(this.route + `/${id}`, data);
  }
}
