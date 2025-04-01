import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NgClass, NgStyle} from "@angular/common";
import {DopeSideMenuComponent} from "../dope-side-menu/dope-side-menu.component";

@Component({
  selector: 'app-dope-header',
  templateUrl: './dope-header.component.html',
  styleUrls: ['./dope-header.component.scss'],
  imports: [
    RouterLink,
    RouterOutlet,
    NgClass,
    RouterLinkActive,
    NgStyle,
    DopeSideMenuComponent
  ],
  standalone: true
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
