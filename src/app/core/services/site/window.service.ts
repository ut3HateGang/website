import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowService {

  max_phone: number = 767;

  constructor() {
    this._innerHeight$.next(window.innerHeight);
    this._innerWidth$.next(window.innerWidth);
    window.addEventListener('resize', () => {
      this._innerHeight$.next(window.innerHeight);
      this._innerWidth$.next(window.innerWidth);
    });
  }

  private _innerWidth$: Subject<number> = new Subject<number>();

  get innerWidth$(): Subject<number> {
    return this._innerWidth$;
  }

  get innerWidth(): number {
    return window.innerWidth;
  }

  private _innerHeight$: Subject<number> = new Subject<number>();

  get innerHeight$(): Subject<number> {
    return this._innerHeight$;
  }

  get innerHeight(): number {
    return window.innerHeight;
  }

  isPhone(): boolean {
    return this.innerWidth <= this.max_phone;
  }

  isDarkMode(): boolean {
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
      return false;
    }
  }

}