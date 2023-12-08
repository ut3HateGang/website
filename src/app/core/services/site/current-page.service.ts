import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {Page} from '../../objects/enums/page.enum';

@Injectable({
  providedIn: 'root',
})
export class CurrentPageService {
  private _previousPage: Page = Page.HOME;

  constructor(private _titleService: Title) {
    this.currentPage = this._currentPage;
    window.addEventListener('focus', () => this.setTitle());
    window.addEventListener('blur', () => this.setTitleLeave());
  }

  private _currentPage$: Subject<Page> = new Subject<Page>();

  get currentPage$(): Subject<Page> {
    return this._currentPage$;
  }

  private _currentPage: Page = Page.HOME;

  get currentPage(): Page {
    return this._currentPage;
  }

  set currentPage(value: Page) {
    this._previousPage = this._currentPage;
    this._currentPage = value;
    this._currentPage$.next(this.currentPage);
    this.setTitle();
  }

  getPreviousPath(): string {
    switch (this._previousPage) {
      case Page.HOME:
        return '/';
      case Page.SNAKE:
        return '/';
      case Page.ZERGRUSH:
        return '/';
      case Page.NOT_FOUND:
        return '/';
    }
  }

  setTitle(): void {
    switch (this._currentPage) {
      case Page.HOME:
        this._titleService.setTitle('Accueil');
        break;
      case Page.SNAKE:
        this._titleService.setTitle('Snake');
        break;
      case Page.ZERGRUSH:
        this._titleService.setTitle('Zerg Rush');
        break;
      case Page.NOT_FOUND:
        this._titleService.setTitle('Erreur 404');
        break;
    }
  }

  setTitleLeave(): void {
    this._titleService.setTitle('Reviens vite !');
  }
}
