import { Component } from '@angular/core';
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {
  faDribbble,
  faDribbbleSquare,
  faFacebookF,
  faFacebookSquare, faLinkedin,
  faLinkedinIn,
  faPinterestSquare, faTumblr, faTwitter,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

@Component({
    selector: 'app-drope-footer',
  imports: [
    FaIconComponent
  ],
    templateUrl: './drope-footer.component.html',
    styleUrl: './drope-footer.component.scss'
})
export class DropeFooterComponent {

  protected readonly faCog = faCog;
  protected readonly faFacebookF = faFacebookF;
  protected readonly faFacebookSquare = faFacebookSquare;
  protected readonly faTwitterSquare = faTwitterSquare;
  protected readonly faPinterestSquare = faPinterestSquare;
  protected readonly faLinkedinIn = faLinkedinIn;
  protected readonly faLinkedin = faLinkedin;
  protected readonly faDribbbleSquare = faDribbbleSquare;
  protected readonly faTwitter = faTwitter;
  protected readonly faDribbble = faDribbble;
  protected readonly faTumblr = faTumblr;
}
