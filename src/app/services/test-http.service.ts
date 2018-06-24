import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Person } from '../models/person';

@Injectable()
export class TestHttpService {

  private url = "http://demo5165631.mockable.io/user";
  constructor(private http: HttpClient) {

  }

  getUser():Observable<Message> {
    debugger
    return this.http.get(this.url);
  }

}

class Message{
  msg:string;
}
