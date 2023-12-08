import { Component } from '@angular/core';
import {
  CurrentPageService
} from '../../../core/services/site/current-page.service';
import {Page} from '../../../core/objects/enums/page.enum';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(
    private __currentPageService: CurrentPageService) {
  }

  ngOnInit(): void {
    this.__currentPageService.currentPage = Page.NOT_FOUND
    window.location.href = "https://tetris404.vercel.app/"
  }
}
