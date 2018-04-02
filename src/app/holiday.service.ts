import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HolidayService {

  private url = "https://holidayapi.com/v1/holidays";

  constructor(private http: HttpClient) { }

    public getRequest(){
    let headers = new Headers({
      'Content-Type': 'application/json; charset=utf-8'
    });
      //let options = new RequestOptions({ headers: headers });
      let params = {"key":'bc3b48d8-4af0-499b-9f57-e41645a59d49',"country":"US","year":"2015"};
      return this.http.get(this.url,{params: params})
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response){
    let body = res;
    return body || {};
  }
   private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error.json() || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
