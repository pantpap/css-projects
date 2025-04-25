import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCog, faBold, faBolt, faStar} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-dope-services',
    imports: [FontAwesomeModule],
    templateUrl: './dope-services.component.html',
    styleUrl: './dope-services.component.scss'
})
export class DopeServicesComponent {
  faCog = faCog;
  faBolt = faBolt;
  protected readonly faStar = faStar;
}
