import { Directive, ElementRef, Input } from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { NguiReactAppComponent } from './react.app.component';

@Directive({
  selector: 'ngui-react, [ngui-react]',
  exportAs: 'ngui-react'
})
export class NguiReactDirective {
  element: HTMLElement;
  reactAppInstance: any;
  reactComponentInstance: any;

  @Input('reactChildren')  reactChildren: any[] = [];
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
      let reactWrapperEl = React.createElement(
        NguiReactAppComponent, {
          comp: comp,
          props: props,
          state: state
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
