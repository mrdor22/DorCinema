import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { delay } from 'rxjs/internal/operators/delay';
import { SearchService } from 'src/app/services/search.service';
import { stringify } from '@angular/compiler/src/util';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  // animations: [
  //   trigger('fade', [
  //     transition('void => *', [
  //       style({opacity: 1}),
  //       animate(300, style({opacity: 0}))
  //     ]),
  //     transition('* => void', [
  //       style({opacity: 0}),
  //       animate(5000, style({opacity: 1}))
  //     ])
  //   ])
  // ]
})
export class SliderComponent implements OnInit {
  id: any;
  clicked: boolean;
  mobile: boolean;
  current = 0;
  movies: Array<any>;
  ranks: Array<any>;
  movieName: string;
youTubeSub: Subscription;
trailer: any;
src: any;
responsiveOptions: any;
  constructor(public service: SearchService,public router: Router, public loader: LoaderService) { }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 1210)
  });


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
          numVisible: 1,
          numScroll: 1
      }
  ];
    
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }

    this.getSliderMovies(1);
    this.sliderTimer();
  }


  getCurrentMovie(movie) {
    this.id = movie.id;
    this.service.sendMessage(this.id);
    
      this.redirectTo([`/movies/${this.id}`]);
      
    }
    
    redirectTo(url: any){
      this.router.navigateByUrl('/', {skipLocationChange: false}).then(()=>
    this.router.navigate(url))
    }
    




 
  getSliderMovies(page: number) {
    
    this.service.getTopMovies(page).subscribe((res: any) => {
        
        this.movies = res.results;
        
        const newArray = res.results.map(x=>x.title);
        this.movieName = newArray[0];
        this.id = res.results[0].id;
        console.log(this.id);
        
        
       
      });
  }

  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.movies.length;
    }, 2500);
  }

}
