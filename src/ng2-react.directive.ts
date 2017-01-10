import { Directive, ElementRef, Input } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Ng2ReactWrapperComponent } from './ng2-react.wrapper.component';

@Directive({
  selector: 'ng2-react, [ng2-react]',
  exportAs: 'ng2-react'
})
export class Ng2ReactDirective {
  element: HTMLElement;
  reactWrapperInstance: any;
  reactInstance: any;

  @Input('reactChildren')  reactChildren: any[] = [];
  @Input('reactComponent') reactComponent: any;
  @Input('reactProps')     reactProps: React.Attributes = {};

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    if (this.reactComponent) {
      let props = Object.assign({}, this.reactProps);
      props['ref'] = el => {this.reactInstance = el};
      let reactEl: any = React.createElement(this.reactComponent, props, this.reactChildren);

      let reactWrapperEl = React.createElement(
        Ng2ReactWrapperComponent, {reactEl: reactEl}, null
      );
      this.reactWrapperInstance = ReactDOM.render(reactWrapperEl, this.element );
    }
  }

  setState(props: any) {
    this.reactWrapperInstance.setState(props);
  }
}
