import { Component } from '@angular/core';
import {DopeHeaderComponent} from "./dope-header/dope-header.component";

@Component({
  selector: 'app-dopetrope',
  standalone: true,
  imports: [
    DopeHeaderComponent
  ],
  templateUrl: './dopetrope.component.html',
  styleUrl: './dopetrope.component.scss'
})
export class DopetropeComponent {

}
