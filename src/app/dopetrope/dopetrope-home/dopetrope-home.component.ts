import { Component } from '@angular/core';
import {DopeBannerComponent} from "../dope-banner/dope-banner.component";
import {DopeServicesComponent} from "../dope-services/dope-services.component";

@Component({
  selector: 'app-dopetrope-home',
  standalone: true,
  imports: [
    DopeBannerComponent,
    DopeServicesComponent
  ],
  templateUrl: './dopetrope-home.component.html',
  styleUrl: './dopetrope-home.component.scss'
})
export class DopetropeHomeComponent {

}
