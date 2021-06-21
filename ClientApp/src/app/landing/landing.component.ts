import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  public isAuthenticated: Observable<boolean>;
  constructor(private authorizeService: AuthorizeService, private router:Router) {

  }
  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    if (this.isAuthenticated) {
      this.router.navigate(['/home']);
    }
  }

}
