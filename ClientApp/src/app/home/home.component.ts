import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato/services/candidato.service';
import { DashboardModel } from '../candidato/model/candidato.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  dashboard: DashboardModel = { empleados: 0, candidatos: 0, vacantes: 0 };
  constructor(private services: CandidatoService) {
    console.log('home');
  }

  ngOnInit() {
    this.services.getDashboard()
      .subscribe(result => {
        console.log(result);
        this.dashboard = result;
      });
  }
}
