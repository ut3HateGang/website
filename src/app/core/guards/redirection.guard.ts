import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectionGuard implements CanActivate {

  constructor() {
  }

  canActivate(
      route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    window.location.href = route.data['link'];
    return true;

  }
}