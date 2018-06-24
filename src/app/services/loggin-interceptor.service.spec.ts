import { TestBed, inject } from '@angular/core/testing';

import { LogginInterceptorService } from './loggin-interceptor.service';

describe('LogginInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogginInterceptorService]
    });
  });

  it('should be created', inject([LogginInterceptorService], (service: LogginInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
