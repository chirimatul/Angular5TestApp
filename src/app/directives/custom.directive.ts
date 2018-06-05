import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elementRef: ElementRef) {
    // debugger
    // this.elementRef.nativeElement.
    //   style.backgroundColor = this.defaultColor;
  }

  ngOnInit() {
    debugger
    this.elementRef.nativeElement.
      style.backgroundColor = this.defaultColor;
  }

  @Input("appCustom")
  defaultColor: string;

  @Input()
  mouseEnterColor: string;
  mouseEnterColor1: string;
  

  @HostListener("mouseenter", ['$event'])
  handleMouseEnter(obj) {
    debugger
    this.elementRef.nativeElement.
      style.backgroundColor = this.mouseEnterColor;
  }

  @HostListener("mouseout")
  handleMouseLeave() {
    this.elementRef.nativeElement.
      style.backgroundColor = "blue";
  }

  @HostListener("click")
  handleMouseClick() {
    this.elementRef.nativeElement.
      style.backgroundColor = "green";
  }

  // @HostListener("keydown")
  // handleMousekeyDown() {
  //   alert("key down");
  // }


}
