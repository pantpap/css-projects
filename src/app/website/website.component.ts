import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {BannerComponent} from "./banner/banner.component";
import {MainSloganComponent} from "./main-slogan/main-slogan.component";
import {AboutComponent} from "./about/about.component";
import {WhatWeDoComponent} from "./what-we-do/what-we-do.component";

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    HeaderComponent,
    BannerComponent,
    MainSloganComponent,
    AboutComponent,
    WhatWeDoComponent
  ],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent {

}
