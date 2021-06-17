import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  show: any[];
  constructor() { }

  ngOnInit() {
    this.show = [true, false, false];
  }
  changeTab(id: number) {
    this.show.forEach((element, i) => {
      this.show[i] = false;
    });
    this.show[id] = true;
    console.log(this.show);
  }

}
