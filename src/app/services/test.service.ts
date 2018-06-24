import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, catchError, retry } from 'rxjs/operators';
import { Person } from '../models/person';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) { }


  getUser(): Observable<Person> {

    let options = {
      headers: {
        'accept': 'application/json',
        'token': 'someTokenValue',
      },
      params:new HttpParams().set('id',"10")
    };
    //return this.http.get<Person>("someURL", options);
    let id=90;
    let url=`someurl?id=${id}`;//DELETgetE api/person/90

    return this.http.get<Person>("someURL",).pipe(
      tap(x => { }),// you change response here 
      retry(2), // retry attempt in case of failure
      catchError(this.processError) // catch error and do processing
    );

  }

  createPerson(person:Person):Observable<Person>{
    return this.http.post<Person>("url",person);
  }


  updatePerson(person:Person):Observable<Person>{
    return this.http.put<Person>("url",person);
  }

  deletePerson(id:number):Observable<boolean>{
    let url=`someurl/${id}`;//DELETE api/person/42
    return this.http.delete<boolean>(url);
  }

  processError(error) {
    return Observable.throw('Something bad happened; please try again later.');
  }

}
