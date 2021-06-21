import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiRoutes, getRoute } from 'src/app/core/api.routes';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private route = '';
  constructor(private http: HttpClient) {
    console.log('consulta services ready');
    console.log(getRoute(apiRoutes.competencia.get));
  }
  get(): Observable<any> {
    this.route = getRoute(apiRoutes.competencia.get);
    return this.http.get<any>(this.route);
  }
}
