import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[CustomIf]'
})
export class CustomIfDirective {

  @Input() set CustomIf(value:boolean){
    if (value) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef:TemplateRef<HTMLElement>,
    private viewContainer:ViewContainerRef
    ) { 

  }

}
