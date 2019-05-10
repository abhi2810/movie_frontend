import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddMovieComponent } from './pages/add-movie/add-movie.component';
import { InfoComponent } from './pages/info/info.component';
import { ErrorComponent } from './pages/error/error.component';
import { ShowDetailsComponent } from './pages/show-details/show-details.component';
import { AddPersonComponent } from './pages/add-person/add-person.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'addmovies', component: AddMovieComponent},
  {path: 'listproducer', component: ShowDetailsComponent},
  {path: 'listactor', component: ShowDetailsComponent},
  {path: 'info', component: InfoComponent},
  {path: 'dummy', component: AddPersonComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
