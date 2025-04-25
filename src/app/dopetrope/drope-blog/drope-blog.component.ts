import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faComment, faFileAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-drope-blog',
  imports: [
    FaIconComponent
  ],
    templateUrl: './drope-blog.component.html',
    styleUrl: './drope-blog.component.scss'
})
export class DropeBlogComponent {
  protected readonly faFileAlt = faFileAlt;
  protected readonly faComment = faComment;
}
