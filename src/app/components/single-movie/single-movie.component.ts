import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { SearchService } from 'src/app/services/search.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  pic: string;
  message = ''
  movieList: any;
  id: string;
movieToPage: any;
rating;
defaultSrc: string = "../../../assets/notfound.png";
@Input() singleMovie: any;

getCurrentMovie(movie) {
this.id = movie.id;
this.service.sendMessage(this.id);

  this.redirectTo([`/movies/${this.id}`]);
  
}

redirectTo(url: any){
  this.router.navigateByUrl('/', {skipLocationChange: false}).then(()=>
  this.router.navigate(url));
}


onImgError(event) { 
  event.target.src = this.defaultSrc;
}

  constructor(public service: SearchService,public arouter: ActivatedRoute,public router: Router) { }

  ngOnInit(): void {
    this.service.sendMessage(this.message);
  
  }


  


}
