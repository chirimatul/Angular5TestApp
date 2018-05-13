import { TestBed, inject } from '@angular/core/testing';

import { UserService1Service } from './user-service1.service';

describe('UserService1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService1Service]
    });
  });

  it('should be created', inject([UserService1Service], (service: UserService1Service) => {
    expect(service).toBeTruthy();
  }));
});
