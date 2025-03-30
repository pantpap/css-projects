import { Component } from '@angular/core';
import {DopeBannerComponent} from "../dope-banner/dope-banner.component";
import {DopeServicesComponent} from "../dope-services/dope-services.component";
import {DropePortfolioComponent} from "../drope-portfolio/drope-portfolio.component";
import {DropeBlogComponent} from "../drope-blog/drope-blog.component";
import {DropeFooterComponent} from "../drope-footer/drope-footer.component";

@Component({
  selector: 'app-dopetrope-home',
  standalone: true,
  imports: [
    DopeBannerComponent,
    DopeServicesComponent,
    DropePortfolioComponent,
    DropeBlogComponent,
    DropeFooterComponent
  ],
  templateUrl: './dopetrope-home.component.html',
  styleUrl: './dopetrope-home.component.scss'
})
export class DopetropeHomeComponent {

}
