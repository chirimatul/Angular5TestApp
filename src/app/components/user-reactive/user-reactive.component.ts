import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-reactive',
  templateUrl: './user-reactive.component.html',
  styleUrls: ['./user-reactive.component.css']
})
export class UserReactiveComponent {

  user: User;
  userGroup: FormGroup;
  //fnameControl: FormControl;
  constructor(private fb: FormBuilder) {

    
    this.user = new User();
    this.user.address.push(new Address("kharadi", "Pune"));
    this.user.address.push(new Address("viman nagar", "Pune 52"));
    // this.fnameControl = new FormControl(this.user.fName,[ Validators.minLength(10), Validators.required]);
    // this.userGroup = new FormGroup({
    //   'fName': this.fnameControl
    // });

    this.userGroup = fb.group({
      'fName': [this.user.fName,
      [Validators.required,
      Validators.minLength(10)]],
      'lName': this.user.lName,
      address: this.getAddressArray()
      //'userAddress': this.fb.array(this.user.address.map(x => this.fb.group(x)))

    });

    debugger
  }

  get address(): FormArray {
    debugger
    return this.userGroup.get('address') as FormArray;
  };

  getAddressArray(): FormArray {
    let fgArray =this.user.address.map(x => this.fb.group(x));
    return this.fb.array(fgArray);
  }


  ngOnInit(){
    //this.testFun();
  }
  testFun() {


    const randomNumber = new Observable((observer) => {
      
      const { next, error } = observer;
      for (var index = 0; index < 5; index++) {
        next(Math.floor(5000000));
      }


      // When the consumer unsubscribes, clean up data ready for next subscription.
      return { unsubscribe() { console.log("I will be called while subscribing"); } };
    });

    // Call subscribe() to start listening for updates.
    const testSubscription = randomNumber.subscribe({
      next(num) { 
        debugger
        console.log('random num : ', num); 
      },
      error(msg) { console.log('Error Getting Location: ', msg); },
      complete() { console.log('finished'); }
    });


    // Stop listening for location after 10 seconds
    setTimeout(() => { testSubscription.unsubscribe(); }, 10000);

  }



  


  // get address(): FormArray {

  //   let t = this.userGroup.get("address") as FormArray;
  //   debugger
  //   return t;
  // }
  // getAddressGroup(): FormGroup {
  //   let fg = this.fb.group({
  //     'addline1': this.user.address.add1,
  //     'addline2': this.user.address.add2
  //   });
  //   return fg;
  // }

 

}


class User {
  fName = "atul";
  lName = "chirame";
  address: Address[] = [];
}


class Address {

  constructor(public add1: string,
    public add2: string) {

  }


}