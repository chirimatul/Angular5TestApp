import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() {
    debugger
    console.log('I am in service');

  }

  getUser(): string {

    return "from service";
  }
}
