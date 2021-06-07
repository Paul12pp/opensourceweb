import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  navC = "";
  toggleC = "";
  bodypdC = "";
  headerpdC = "";


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
