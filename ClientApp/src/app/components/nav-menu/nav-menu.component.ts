import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  navC = '';
  toggleC = '';
  bodypdC = '';
  headerpdC = '';
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  constructor(private authorizeService: AuthorizeService) {

  }
  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    if (!this.isAuthenticated) {
      //document.querySelector('body').style.paddingLeft = '20px';
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.navC = this.isExpanded ? 'show' : "";
    // change icon
    this.toggleC = this.isExpanded ? 'bx-x' : "";
    // add padding to body
    this.bodypdC = this.isExpanded ? 'body-pd' : "";
    // add padding to header
    this.headerpdC = this.isExpanded ? 'body-pd' : "";
    let element = document.getElementById("body-pd");
    element.className = this.bodypdC;
  }

}
