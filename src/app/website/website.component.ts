import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {BannerComponent} from "./banner/banner.component";
import {MainSloganComponent} from "./main-slogan/main-slogan.component";
import {AboutComponent} from "./about/about.component";
import {WhatWeDoComponent} from "./what-we-do/what-we-do.component";
import {WhatWeOfferComponent} from "./what-we-offer/what-we-offer.component";

@Component({
    selector: 'app-website',
    imports: [
        HeaderComponent,
        BannerComponent,
        MainSloganComponent,
        AboutComponent,
        WhatWeDoComponent,
        WhatWeOfferComponent
    ],
    templateUrl: './website.component.html',
    styleUrl: './website.component.scss'
})
export class WebsiteComponent {

}
