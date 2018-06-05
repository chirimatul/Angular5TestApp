import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: Player[], args?: any): any {

    let lst = [];
    value.forEach(element => {
      if (element.fName.indexOf('s') != -1) {
        lst.push(element);
      }
    });
    return lst;
    //return value.splice(1,2);



    //value.filter()
    // //return "this is from my pipe for " + args + " : " + value;
    // if (args == "admin") {
    //   return "this is from my pipe for " + args + " : " + value;
    // }
    // else {
    //   return "this is from my pipe" + args + " : " + value;
    // }


  }

}
