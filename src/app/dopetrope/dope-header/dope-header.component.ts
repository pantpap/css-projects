import { Component } from '@angular/core';
import {DopeSideMenuComponent} from "../dope-side-menu/dope-side-menu.component";
import {NgClass, NgStyle} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-dope-header',
    templateUrl: './dope-header.component.html',
    styleUrls: ['./dope-header.component.scss'],
  imports: [
    DopeSideMenuComponent,
    NgStyle,
    NgClass,
    RouterOutlet

  ]
})

export class DopeHeaderComponent {
  selectedItem: string | null = null;
  isMenuVisible = false;
  isSideMenuVisible = false;

  setActiveMenu(item: string) {
    this.selectedItem = item;
  }

  toggleMenu(event: Event){
    event.preventDefault();
    this.isMenuVisible = !this.isMenuVisible;
  }

  showMenu() {
    this.isMenuVisible = true;
  }

  hideMenu() {
    this.isMenuVisible = false;
  }

  toggleSideMenu() {
    this.isSideMenuVisible = !this.isSideMenuVisible;
  }
}
