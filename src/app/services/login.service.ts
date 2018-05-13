import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }
  
  getUsername(){
    return "from service";
  }

}
