import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private httpLoading$ = new ReplaySubject<boolean>(1);

  constructor() { }



  httpProgress(): Observable<boolean> {
    console.log('x');
    
    return this.httpLoading$.asObservable();
  }


  setHttpProgressStatus(inprogess: boolean) {
    this.httpLoading$.next(inprogess);
  }
}
