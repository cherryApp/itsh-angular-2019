import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-crud';
  subscription: Subscription = null;

  source$: Observable<any> = new Observable( (observer) => {
    setInterval( () => {
      const r = Math.floor(Math.random() * 100);
      observer.next( r );
    }, 1000);
    // tslint:disable-next-line: max-line-length
    /* const url = 'http://localhost:3000/employee';
    this.http.get(url)
      .toPromise()
      .then(
        data => observer.next(data)
      ); */

    setTimeout( () => {
      observer.complete();
    }, 10000);

  });

  sub$: Subject<any> = new Subject();

  constructor(
    private http: HttpClient
  ) {
    /* setInterval( () => {
      this.sub$.next( Math.floor(Math.random() * 100) );
    }, 1000); */
  }

  ngOnInit() {
    /* const shared = this.source$.pipe(share());
    this.subscription = shared.subscribe(
      data => console.log('Next: ', data),
      err => console.error(err),
      () => {
        console.log('Observable has been completed.');
        this.subscription.unsubscribe();
      }
    );

    shared.subscribe(
      data => console.log('Subscriber 2: ', data)
    );
    shared.subscribe(
      data => console.log('Subscriber 3: ', data)
    ); */

    /* this.sub$.subscribe(
      data => console.log(data)
    );
    this.sub$.subscribe(
      data => console.log(data)
    );
    this.sub$.subscribe(
      data => console.log(data)
    ); */
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
