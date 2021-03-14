import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowseComponent } from './components/browse/browse.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [

  {path: 'movies/:movieId' , component: MoviePageComponent},
  {path: 'search' , component: BrowseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled'
  })],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
