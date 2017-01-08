import { Directive, ElementRef, Input } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Directive({
  selector: 'ng2-react, [ng2-react]',
  exportAs: 'ng2-react'
})
export class Ng2ReactDirective {
  element: HTMLElement;
  reactInstance: any;

  @Input('reactChildren')  reactChildren: any[] = [];
  @Input('reactComponent') reactComponent: any;
  @Input('reactProps')     reactProps: React.Attributes = {};

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    if (this.reactComponent) {
      let reactEl: any = React.createElement(
        this.reactComponent,
        this.reactProps,
        this.reactChildren
      );
      this.reactInstance = ReactDOM.render(reactEl, this.element );
    }
  }

  setState(props: any) {
    this.reactInstance.setState(props);
  }
}
