import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiRoutes, getRoute } from 'src/app/api.routes';
import { Observable } from 'rxjs';
import { IdiomaModel } from '../model/idioma.model';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  private route = '';
  constructor(private http: HttpClient) {
    console.log('idioma services ready');
    console.log(getRoute(apiRoutes.idioma.get));
  }
  get(): Observable<any> {
    this.route = getRoute(apiRoutes.idioma.get);
    return this.http.get<any>(this.route);
  }
  getById(id: number): Observable<IdiomaModel> {
    this.route = getRoute(apiRoutes.idioma.get);
    return this.http.get<any>(this.route + `/${id}`);
  }
  post(data: IdiomaModel) {
    this.route = getRoute(apiRoutes.idioma.post);
    return this.http.post(this.route, data);
  }
  edit(id: number, data: IdiomaModel) {
    this.route = getRoute(apiRoutes.idioma.edit);
    return this.http.post(this.route + `/${id}`, data);
  }
}
