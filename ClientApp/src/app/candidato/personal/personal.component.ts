import { Component, Input, OnInit } from '@angular/core';
import { CandidatoModel } from '../model/candidato.model';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  @Input() candidato: CandidatoModel;
  @Input() departamentos: any[];
  constructor() { }

  ngOnInit() {
  }

}
