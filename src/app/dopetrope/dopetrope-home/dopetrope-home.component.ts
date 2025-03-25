import { Component } from '@angular/core';
import {DopeBannerComponent} from "../dope-banner/dope-banner.component";

@Component({
  selector: 'app-dopetrope-home',
  standalone: true,
  imports: [
    DopeBannerComponent
  ],
  templateUrl: './dopetrope-home.component.html',
  styleUrl: './dopetrope-home.component.scss'
})
export class DopetropeHomeComponent {

}
