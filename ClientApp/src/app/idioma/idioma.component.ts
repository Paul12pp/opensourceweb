import { Component, OnInit } from '@angular/core';
import { IdiomaService } from './services/idioma.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

  constructor(private services: IdiomaService) { }

  ngOnInit() {
    this.services.get()
      .subscribe(result => {
        console.log(result);
      });
  }

}
