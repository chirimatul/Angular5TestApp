import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestHttpService } from '../../services/test-http.service';



@Component({
  selector: 'app-obs-study',
  templateUrl: './obs-study.component.html',
  styleUrls: ['./obs-study.component.css'],
  providers:[TestHttpService]
})
export class ObsStudyComponent implements OnInit {

  constructor(private service: TestHttpService) { }

  ngOnInit() {
    //this.testObs();
    //this.createObservable();
    this.getUser();
  }

  getUser() {

    let obs = this.service.getUser();
    obs.subscribe(
      data => {

        debugger;
      },
      error => {
        debugger;
      },
      () => {
        debugger
      }
    );
  }

  createObservable() {
    let obs = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      //observer.error("bad request");
      observer.next(4);
      observer.complete();
      return {
        unsubscribe() {
          debugger
          // free res
        }
      }
    })

    let test = obs.subscribe(
      data => {
        console.log("from custom : " + data);
      },
      error => {
        console.log("from custom error : " + error);
      },
      () => {
        console.log("from custom complete");
      }
    );
    //test.unsubscribe();
  }

  testObs() {

    let obs = Observable.of(1, 2, 3, 4);
    obs.subscribe(
      x => {
        debugger
        console.log(x);
      },
      y => {
        console.log(y);
      },
      () => {
        console.log('complete');
      }
    );
  }

}
