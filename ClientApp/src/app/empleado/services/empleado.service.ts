import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoutes, getRoute } from 'src/app/core/api.routes';
import { DepartamentoModel } from 'src/app/puesto/model/puesto.model';
import { EmpleadoModel, SearchEmpleadoInputModel } from '../model/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private route = '';
  constructor(private http: HttpClient) {
    console.log('empleado services ready');
    console.log(getRoute(apiRoutes.empleado.get));
  }
  get(): Observable<any> {
    this.route = getRoute(apiRoutes.empleado.get);
    return this.http.get<any>(this.route);
  }
  getById(id: number): Observable<EmpleadoModel> {
    this.route = getRoute(apiRoutes.empleado.get);
    return this.http.get<any>(this.route + `/${id}`);
  }
  getDpt(): Observable<DepartamentoModel[]> {
    this.route = getRoute(apiRoutes.puesto.getdpt);
    return this.http.get<any>(this.route);
  }
  getPt(): Observable<any> {
    this.route = getRoute(apiRoutes.puesto.get);
    return this.http.get<any>(this.route);
  }
  search(data: SearchEmpleadoInputModel): Observable<EmpleadoModel> {
    this.route = getRoute(apiRoutes.empleado.search);
    return this.http.get<any>(this.route + `?desde=${data.desde}&hasta=${data.hasta}`);
  }
  post(data: EmpleadoModel) {
    this.route = getRoute(apiRoutes.empleado.post);
    return this.http.post(this.route, data);
  }
  edit(id: number, data: EmpleadoModel) {
    this.route = getRoute(apiRoutes.empleado.edit);
    return this.http.post(this.route + `/${id}`, data);
  }
}
