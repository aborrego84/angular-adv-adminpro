import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, retry, interval, take,map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {
  
  public intervalSubs:Subscription|any;
  constructor() { 
  /* this.returnObservable().pipe(
      retry(2)
    ).subscribe(
      valor =>console.log('Subs:', valor),
      err => console.warn('Error:',err),
      ()=>console.info('Obs finish')
    );*/
     this.intervalSubs = this.returnInterval().subscribe( console.log)
  }
  returnInterval():Observable<number>{
   // const interval$ 
   return interval(500)
          .pipe(take(10),
          map(value => value+1),
          filter(value => (value%2===0) ? true:false)
          );
    //return interval$;
  }
  returnObservable(): Observable<number>{    
    let i =-1;
    const obs$ = new Observable<number> (observer => {
      const interval = setInterval( () => {
        i++;
        observer.next(i);
        if(i === 4)
        {
          clearInterval(interval);
          observer.complete();
        }
        if(i ===2)
        {          
          observer.error('i equals 2');
        }
      }, 1000)

    });  
    return obs$;
  }
  

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
