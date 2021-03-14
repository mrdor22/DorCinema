import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  message: string;
  ratingsMessage;
  @Input() moviePageId: any;
  singleMovieInfo: any;
  ratings: any;
  pages: any;
  rand: any;
  id: string;
  dor: any;
  src: string;
  language: any;
  video: string;
  videos: Array<string>;
  spinner: boolean
  youTubeVideo: any;
  youTubeSub: Subscription;
  moviesSub: Subscription;
  sub: any;
  mightLike: any;
  responsiveOptions


  getTopMovies() {
    this.sub = this.service.getTopMovies(this.getRandomPage()).subscribe((res) => {
      this.mightLike = res.results;
      const newmovies = this.mightLike.map(a => a['poster_path'])
      this.spinner = true;
    })
  }

  getRandomPage() {
    this.pages = [1, 2, 3, 4,5];
    this.rand = this.pages[~~(Math.random() * this.pages.length)];
return this.rand;

  }

  getYouTubeVideo(name: string) {
    this.youTubeSub = this.service.getVideo(name).subscribe((data) => {
      this.videos = data.items;
      this.src = 'https://www.youtube.com/embed/' + data.items[0].id.videoId;
    })
  }
  constructor(public service: SearchService, public router: ActivatedRoute) {
  }

  show() {
    setTimeout(() => {
      this.spinner = true;
    }, 1500);
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.getTopMovies();
      this.getRandomPage();
    }, 900);


    this.responsiveOptions = [
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
        numVisible: 2,
        numScroll: 2
      }
    ];

    setTimeout(() => {

      this.spinner = true;
    }, 1000);

    this.message = this.service.getMessage();
    this.moviesSub = this.service.getMovie(this.message).subscribe(res => {

      this.singleMovieInfo = res;

      this.youTubeVideo = res.title;
      localStorage.setItem('youtube', this.youTubeVideo);
       this.getYouTubeVideo(this.youTubeVideo);
    })



    this.getYouTubeVideo(localStorage.getItem('youtube'));

    this.id = this.router.snapshot.paramMap.get('movieId');
    this.service.getMovie(this.id).subscribe((res) => {


      this.singleMovieInfo = res;
    })






  }


  ngOnDestroy() {
    // this.youTubeSub.unsubscribe();
    this.moviesSub.unsubscribe();
  }


}






