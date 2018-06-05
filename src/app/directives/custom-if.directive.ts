import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
this.viewContainerRef.clear();
  }

  @Input()
  set appCustomIf(value: boolean) {
    if (value) {
      //add
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      // remove
      this.viewContainerRef.clear();
    }

  }

}
