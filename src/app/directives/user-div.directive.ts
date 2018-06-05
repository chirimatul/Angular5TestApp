import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({selector: '[appUserDiv]'})
export class UserDivDirective implements OnInit { 
  @Input("appUserDiv")
  defaultColor :string;

  @Input()
  mouseEnterColor :string;
  
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = this.defaultColor;
  }
  @HostListener("mouseenter")
  mouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor = this.mouseEnterColor;
  }
  @HostListener("mouseleave")
  mouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = "brown";
  }
  @HostListener("click")
  clicked(){
    this.elementRef.nativeElement.style.backgroundColor = "grey";
  }
}
