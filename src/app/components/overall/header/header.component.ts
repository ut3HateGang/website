import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {Icon} from 'src/app/core/objects/enums/icon.enum';
import {Page} from 'src/app/core/objects/enums/page.enum';
import {HeaderItem} from 'src/app/core/objects/models/header.model';
import {
  CurrentPageService,
} from 'src/app/core/services/site/current-page.service';
import {WindowService} from 'src/app/core/services/site/window.service';

@Component({
  selector   : 'header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {
  protected path_logo: string = 'assets/logos/logo_complet.png';
  protected _menuIsOpen: boolean = false;

  protected _headerItems: HeaderItem[] = [
    new HeaderItem('/', undefined, 'Accueil', Page.HOME, Icon.HOME),
  ];

  protected _currentPage!: Page;
  protected readonly Icon = Icon;

  constructor(
      private _currentPageService: CurrentPageService,
      protected _windowService: WindowService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this._currentPage = this._currentPageService.currentPage;
    this._currentPageService.currentPage$.subscribe(page => {
        this._currentPage = page;
    });
    this._windowService.innerWidth$.subscribe(
        _ => this._menuIsOpen = this._menuIsOpen &&
            this._windowService.isPhone());
  }

  onClickItem(): void {
    this._menuIsOpen = false;
  }

  onToggleMenu(): void {
    this._menuIsOpen = !this._menuIsOpen;
  }
}
