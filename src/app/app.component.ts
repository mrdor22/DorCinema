import { Component, OnInit, AfterViewInit, Renderer2} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = false;
  onActivate() {
    let scrollToTop = window.setInterval(() => {
        let pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 40); // how far to scroll on each step
        } else {
            window.clearInterval(scrollToTop);
        }
    }, 16);
}

  dor: any

checkUrl() {
  const url = this.router.url;
  if (url.includes('/movies')) {
    return url;
  } else {
    if (this.router.url.includes('/search')) {
      return url;
    }
  }
}

  constructor(public router: Router,public loader: LoaderService,) {}

  title = 'dormovie';

  ngOnInit() {
  this.onActivate();

  }

}
