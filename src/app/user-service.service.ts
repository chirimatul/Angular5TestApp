import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  constructor() { }
  
  getUser():string{

    return "from service";
  }

}
