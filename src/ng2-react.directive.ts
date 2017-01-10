import { Directive, ElementRef, Input } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Ng2ReactAppComponent } from './ng2-react.app.component';

@Directive({
  selector: 'ng2-react, [ng2-react]',
  exportAs: 'ng2-react'
})
export class Ng2ReactDirective {
  element: HTMLElement;
  reactAppInstance: any;
  reactComponentInstance: any;

  @Input('reactChildren')  reactChildren: any[] = [];
  @Input('reactComponent') reactComponent: any;
  @Input('reactProps')     reactProps: React.Attributes = {};

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    if (this.reactComponent) {
      let comp: any  = this.reactComponent;
      let props: any = this.reactProps;
      let reactWrapperEl = React.createElement(
        Ng2ReactAppComponent, {
          comp: comp,
          props: props,
          state: {val: 'one'}
        }
      );
      this.reactAppInstance = ReactDOM.render(reactWrapperEl, this.element);
      this.reactComponentInstance = this.reactAppInstance.reactComponentInstance;
    }
  }

  setState(state: any) {
    this.reactAppInstance.setState(state);
  }
}
