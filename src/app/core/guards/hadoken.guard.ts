import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { HadoukenService } from '../services/site/hadouken.service';

@Injectable({
  providedIn: 'root',
})
export class HadoukenGuard implements CanActivate {

  constructor(private __hadoukenService: HadoukenService) {
  }

  canActivate(): boolean {
    console.log("guard", this.__hadoukenService.isOn);
    return this.__hadoukenService.isOn;
  }
}