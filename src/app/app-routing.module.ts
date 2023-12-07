import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RedirectionGuard} from './core/objects/guards/redirection.guard';
import {
  NotFoundComponent
} from './components/navigation/not-found/not-found.component';
import {HomeComponent} from './components/navigation/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notFound', component: NotFoundComponent},
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
