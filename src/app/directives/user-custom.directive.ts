import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUserCustom]'
})
export class UserCustomDirective {

  constructor(private elementRef:ElementRef) { 
    elementRef.nativeElement.style.backgroundColor="red";
  }

  @HostListener("mouseenter")
  onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor="pink";
  }

}
