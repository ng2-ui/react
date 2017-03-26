import { Directive, ElementRef, Input } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Directive({
  selector: 'ngui-react, [ngui-react]',
  exportAs: 'ngui-react'
})
export class NguiReactDirective {
  element: HTMLElement;
  // reactAppInstance: any;
  // reactComponentInstance: any;
  reactInstance: any;

  @Input('reactComponent') reactComponent: any;
  @Input('reactState')     reactState: any;
  @Input('reactProps')     reactProps: React.Attributes = {};

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    if (this.reactComponent) {
      let comp: any  = this.reactComponent;
      let props: any = this.reactProps;
      let state: any = this.reactState;
      let children = null;

      let reactEl = React.createElement(comp, props, children);
      let callback = () => {};
      this.reactInstance = ReactDOM.render(reactEl, this.element, callback);
      state && this.reactInstance.setState(state);
    }
  }

  setState(state: any) {
    //this.reactAppInstance.setState(state);
  }
}
