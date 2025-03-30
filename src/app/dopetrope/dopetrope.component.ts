import { Component } from '@angular/core';
import {DopeHeaderComponent} from "./dope-header/dope-header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dopetrope',
  standalone: true,
  imports: [
    DopeHeaderComponent,
    RouterOutlet
  ],
  templateUrl: './dopetrope.component.html',
  styleUrl: './dopetrope.component.scss'
})
export class DopetropeComponent {

}
