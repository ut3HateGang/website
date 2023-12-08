import {Component, OnInit} from '@angular/core';
import {
  CurrentPageService
} from '../../../core/services/site/current-page.service';
import {Page} from '../../../core/objects/enums/page.enum';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

    constructor(
      private __currentPageService: CurrentPageService) {
    }

    ngOnInit(): void {
      this.__currentPageService.currentPage = Page.HOME
    }



}
