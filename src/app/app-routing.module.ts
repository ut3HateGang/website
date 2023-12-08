import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectionGuard } from './core/guards/redirection.guard';
import {
  NotFoundComponent
} from './components/navigation/not-found/not-found.component';
import {HomeComponent} from './components/navigation/home/home.component';
import {QuizComponent} from "./components/navigation/quiz/quiz.component";
import { HadoukenGuard } from './core/guards/hadoken.guard';
import { SnakeComponent } from './components/navigation/snake/snake.component';
import { ZergrushComponent } from './components/navigation/zergrush/zergrush.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'notFound', component: NotFoundComponent},
  {
  path: 'snake',
  component: SnakeComponent,
  canActivate: [HadoukenGuard]
  },
  {
  path: 'zergrush',
  component: ZergrushComponent,
  canActivate: [HadoukenGuard]
  },
  {
  path: '**',
  component: RedirectionGuard,
  canActivate: [RedirectionGuard],
  data: {
    link: '/notFound',
  },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
