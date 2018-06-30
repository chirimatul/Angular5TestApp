import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from '../models/person';
import { tap, retry, catchError } from 'rxjs/operators';


@Injectable()
export class TestHttpService {

  private url = "http://demo5165631.mockable.io/user";
  constructor(private http: HttpClient) {

  }

  getUser(): Observable<Message> {
    debugger
    let options = {
      headers: {
        'info': 'somInfo',
        'sToken': 'someTokenValue',
      },
      contentType: 'Text' // image
      //params:new HttpParams().set('id',"10")
    };

    let id = 90;
    let url = this.url + `?id=${id}`;// get api/person/90


    return this.http.get<Message>(this.url, options).pipe(
      tap(x => {
        debugger
      }),// you change response here 
      retry(2), // retry attempt in case of failure
      catchError(this.processError) // catch error and do processing
    );
  }

  processError(error) {

    return Observable.throw('Something bad happened; please try again later.');
  }


  createPerson(person: Person): Observable<Person> {
    let options = {
      headers: {
        'info': 'somInfo',
        'sToken': 'someTokenValue',
      },
      contentType: 'Text' // image
      //params:new HttpParams().set('id',"10")
    };
    return this.http.post<Person>("url", person, options);

  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>("url", person);
  }

  deletePerson(id: number): Observable<boolean> {
    let url = `someurl/'${id}`;//DELETE api/person/42
    return this.http.delete<boolean>(url, {
      headers: {
        'info': 'somInfo',
        'sToken': 'someTokenValue',
      }
    });
  }


}

class Message {
  msg: string;
}
