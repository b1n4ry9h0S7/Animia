import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the TopProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TopProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TopProvider Provider');
  }
  getTop(query): Observable<{}> {
    return this.http.get('https://api.jikan.moe/top/anime/1/'+query+'/').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  // private apiUrl = 'https://api.jikan.moe/schedule';
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
