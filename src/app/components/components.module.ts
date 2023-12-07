import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  matClose,
  matHome, matMenu,
} from '@ng-icons/material-icons/baseline';
import {NgIconComponent, provideIcons} from '@ng-icons/core';
import {HeaderComponent} from './overall/header/header.component';
import {UhgIconComponent} from './uhg-components/uhg-icon/uhg-icon.component';
import {RouterModule} from '@angular/router';
import {ServicesModule} from '../core/services/services.module';
import { HomeComponent } from './navigation/home/home.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UhgIconComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    NgIconComponent,
    ServicesModule
  ],
  providers: [
    provideIcons({
      matHome,
      matClose,
      matMenu
    }),
  ],
  exports: [
    CommonModule,
    HeaderComponent,
  ],
})
export class ComponentsModule {
}
