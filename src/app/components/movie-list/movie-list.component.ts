import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  sub: Subscription;
  topMovies: [];
  PopularMovies: [];
  ComingSoon: [];
  spinner: boolean;




  responsiveOptions: any = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3

    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];



  constructor(public service: SearchService) {

  }



  getTopMovies() {
    this.sub = this.service.getTopMovies(1).subscribe((res) => {
      this.topMovies = res.results;
      const newmovies = this.topMovies.map(a => a['poster_path'])
      this.spinner = true;

    })
  }


  getFamousMovies() {
    this.sub = this.service.getPopularMovies(1).subscribe((res) => {
      this.PopularMovies = res.results;
      this.spinner = true;
    })
  }

  getComingSoon() {
    this.sub = this.service.getComingSoon(1).subscribe((res) => {
      this.ComingSoon = res.results;
      // console.log(this.ComingSoon);
      this.spinner = true;


    })
  }
  ngOnInit(): void {



    setTimeout(() => {

      this.getTopMovies();
      this.getFamousMovies()
      this.getComingSoon();
    }, 1500);


  }

  ngOnDestroy() {
  }

}
