import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {WindowService} from 'src/app/core/services/site/window.service';
import {CurrentPageService} from './site/current-page.service';
import { HadoukenService } from './site/hadouken.service';

@NgModule({
  declarations: [],
  imports     : [
    CommonModule,
    HttpClientModule,
  ],
  providers   : [
    CurrentPageService,
    WindowService,
    HadoukenService
  ],
  exports     : [CommonModule],
})
export class ServicesModule {
}
