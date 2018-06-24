
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { finalize, tap, catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";


@Injectable()
export class LogginInterceptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent |
  HttpResponse<any> | HttpUserEvent<any>> {
  alert("I am request interceptor");
  return next.handle(req).pipe(
    tap(// Succeeds when there is a response; ignore other events
      event => { if (event instanceof HttpResponse) { 

        alert("I am response interceptor");
      } },
      // Operation failed; error is an HttpErrorResponse
      error => { }
    ),
    // Log when response observable either completes or errors
    finalize(() => { })
  );


}

}
