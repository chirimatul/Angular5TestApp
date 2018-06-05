import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppIf]'
})
export class AppIfDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerref: ViewContainerRef) {
    //viewContainerref.createEmbeddedView(templateRef);
  }

  // @Input()
  // set appAppIf(show: boolean) {
  //   // debugger
  //   // if (show == true)
  //   //   this.viewContainerref.createEmbeddedView(this.templateRef);
  //   // else
  //   //   this.viewContainerref.clear();
  // }

}
