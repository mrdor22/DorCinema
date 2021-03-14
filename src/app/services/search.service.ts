import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Identifiers } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  message: string;
  private _movieIdSelected = new Subject<string>();
  currentMovieId$ = this._movieIdSelected.asObservable();

  searchMovieByTitle(title: string): Observable<any> {
    const url = 'http://www.omdbapi.com/?s=' + title + '&apikey=9e42bf8f';

    return this.http.get(url);
  }


  // getMovieById(id: string): Observable<any> {
  //   const url = 'http://www.omdbapi.com/?i='+ id +'&apikey=9e42bf8f';
  //   return this.http.get(url);

  // }

  getJsonMovies(id: string): Observable<any> {
    const url = 'http://www.omdbapi.com/?i=' + id + '&apikey=9e42bf8f';
    return this.http.get(url);


  }

  getMovieSelectedListener(id: string) {
    return this._movieIdSelected.asObservable();
  }

  sendMessage(data) {
    this.message = data;

  }

  
  getMessage() {
    return this.message;
  }
  sendMessage2(data) {
    this.message = data;

  }
  getMessage2() {
    return this.message;
  }






  getVideo(name): Observable<any> {
    const apiKey = 'AIzaSyBQy1J4jDkPlMQ_vw0cK8n7HGJoHSNh-do';
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBQy1J4jDkPlMQ_vw0cK8n7HGJoHSNh-do&type=video&q=' + name;
    return this.http.get<any>(url);
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);

  }

  getTopMovies(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }


  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '243e61223ff52d9b2ccaa49726786381';
    this.language = 'en-US';
    this.region = 'US';
    // return this.http.get(`${this.baseUrl}genre/${genre}/movies?api_key=${this.apiKey}`);


  }
  getNowPlaying(page: number): Observable<any> {


    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }

  getPopularMovies(page: number): Observable<any> {

    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);
  }


  getMoviesByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`);
  }



  getComingSoon(page: number): Observable<any> {

    return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`);

  }

  gerGenre() {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`);

  }


}

