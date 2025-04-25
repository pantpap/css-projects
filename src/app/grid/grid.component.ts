import { Component } from '@angular/core';
import {ItemsComponent} from "./items/items.component";

@Component({
    selector: 'app-grid',
    imports: [
        ItemsComponent
    ],
    templateUrl: './grid.component.html',
    styleUrl: './grid.component.scss'
})
export class GridComponent {

}
