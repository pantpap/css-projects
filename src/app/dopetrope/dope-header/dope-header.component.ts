import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-dope-header',
  templateUrl: './dope-header.component.html',
  styleUrls: ['./dope-header.component.scss'],
  imports: [
    RouterLink,
    RouterOutlet,
    NgClass
  ],
  standalone: true
})

export class DopeHeaderComponent {

  isMenuVisible = false

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
}
