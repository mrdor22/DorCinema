import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { SelectedMoviePipe } from './pipes/selected-movie.pipe';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SafePipe } from './pipes/safe.pipe';
import { FooterComponent } from './components/footer/footer.component';
import {CarouselModule} from 'primeng/carousel';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { CommonModule } from "@angular/common";
import { DragScrollModule } from 'ngx-drag-scroll';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaxLengthPipe} from '../../src/app/pipes/limit.pipe';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { ProgressBarModule} from 'primeng/progressbar';
import  { interceptorService} from '../../src/app/services/interceptor.service';
import { BrowseComponent } from './components/browse/browse.component';
import { HomeComponent } from './components/home/home.component'
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MoviePageComponent,
    SelectedMoviePipe,
    SingleMovieComponent,
    NavbarComponent,
    SafePipe,
    FooterComponent,
    SliderComponent,
    MaxLengthPipe,
    MovieListComponent,
    BrowseComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragScrollModule,
    BrowserAnimationsModule,
    CarouselModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    ProgressSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: interceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

  