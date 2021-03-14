import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  newId: any;
  PopularMovies: any;
  selected: any;
  isHidden: boolean;
  choose: any;
  genreList: any;
  genre: string;
  genreId: string | number;
  movies: any;
  url: any;
  id: any;
  anylist: any;
  sub: Subscription;
  subGenreMovies: Subscription;
  subGenre: Subscription;
  changed: boolean;

  getGenre() {

    this.subGenre = this.movie.gerGenre().subscribe(x => {
      console.log(x);

      // list of genres
      this.genreList = x.genres;

      // assign data to new object
      this.anylist = {};
      this.genreList.map(x => {
        this.anylist[x.name] = x.id
        console.log(this.anylist);

      });

    })
  }

  onChange(genreName) {
    this.genre = genreName;
    let id = this.genre.id;
    // let id = this.anylist[this.genre];
    console.log(this.genre);
    // console.log(this.anylist[this.genre]);
    this.movie.getMoviesByGenre(id).subscribe(x => {
      this.selected = x.results;
      console.log(this.selected);

    })



  }


  getCurrentMovie2(movie) {

    this.newId = movie.id;

    // this.movie.sendMessage(this.id);
    this.movie.sendMessage(this.newId)
    this.redirectTo([`/movies/${this.newId}`]);

  }


  redirectTo(url: any) {
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() =>
      this.router.navigate(url));
  }


  getCurrentMovie(genre) {
    this.id = genre.id;
    this.genre = genre.name;
    console.log(this.id);
    console.log(this.genre);


  }

  getMoviesGenre(genreId) {

    this.subGenreMovies = this.movie.getMoviesByGenre(genreId).subscribe((x: any) => {
      this.movies = x.results;

    });
  }

  getFamousMovies() {
    this.sub = this.movie.getPopularMovies(1).subscribe((res) => {
      this.PopularMovies = res.results;
      console.log(this.PopularMovies);

    })
  }




  constructor(private movie: SearchService, private router: Router) { }

  ngOnInit(): void {
    this.getFamousMovies();
    this.getGenre();

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.subGenre.unsubscribe();
    // this.subGenreMovies.unsubscribe();
  }

}
