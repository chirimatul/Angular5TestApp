import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TestService } from '../../services/test.service';
//import { Of } from 'rxjs/operators';


@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit {

  constructor(private testService:TestService) { }

  ngOnInit() {
    // Create simple observable that emits three values
    // const myObservable = Observable.of(1, 2, 3);

    // // Create observer object
    // const myObserver = {
    //   next: x => console.log('Observer got a next value: ' + x),
    //   error: err => console.error('Observer got an error: ' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // };

    // // Execute with the observer object
    // myObservable.subscribe(myObserver);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
  }

  test(){
    this.testService.getUser().subscribe(
      next=>{

      },
      error=>{

      },
      ()=>{
        
      }
    );
  }


}
