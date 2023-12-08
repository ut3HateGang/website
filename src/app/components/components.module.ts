import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
  matClose,
  matHome, matImage, matMenu, matQuiz,
} from '@ng-icons/material-icons/baseline';
import {NgIconComponent, provideIcons} from '@ng-icons/core';
import {HeaderComponent} from './overall/header/header.component';
import {UhgIconComponent} from './uhg-components/uhg-icon/uhg-icon.component';
import {RouterModule} from '@angular/router';
import {ServicesModule} from '../core/services/services.module';
import { HomeComponent } from './navigation/home/home.component';
import { NotFoundComponent } from './navigation/not-found/not-found.component';
import { QuizComponent } from './navigation/quiz/quiz.component';
import { IntituleComponent } from './navigation/quiz/question/intitule.component';
import { PropositionsComponent } from './navigation/quiz/propositions/propositions.component';
import { HistoryComponent } from './navigation/quiz/history/history.component';
import { ExplanationComponent } from './navigation/quiz/details/explanation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UhgIconComponent,
    HomeComponent,
    NotFoundComponent,
    QuizComponent,
    IntituleComponent,
    PropositionsComponent,
    HistoryComponent,
    ExplanationComponent
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
      matMenu,
      matImage,
      matQuiz
    }),
  ],
  exports: [
    CommonModule,
    HeaderComponent,
  ],
})
export class ComponentsModule {
}
