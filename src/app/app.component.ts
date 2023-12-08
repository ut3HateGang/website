import { Component, HostListener, OnInit } from '@angular/core';
import { HadoukenService } from './core/services/site/hadouken.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';

  constructor(private __hadoukenService: HadoukenService) { }

  @HostListener('document:keydown', ['$event'])
  OnArrowUp(event: KeyboardEvent) { 
    this.__hadoukenService.keyEventDetected(event.key);
  }
}
