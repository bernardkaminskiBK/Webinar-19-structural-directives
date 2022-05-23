import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  @Input() set unless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  private hasView = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }

}
