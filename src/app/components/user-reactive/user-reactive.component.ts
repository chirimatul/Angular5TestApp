import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormArray } from '@angular/forms';

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
    this.user.address.push(new Address("viman nagar", "Pune"));
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

  getAddressArray(): FormArray {
    return this.fb.array(this.user.address.map(x => this.fb.group(x)));
  }

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