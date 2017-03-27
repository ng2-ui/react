import {
 Component,
 ElementRef,
 Input,
 ContentChildren,
 QueryList
} from '@angular/core';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'ngui-react',
  exportAs: 'ngui-react',
  template: '<ng-content></ng-content>'
})
export class NguiReactComponent {
  @ContentChildren(NguiReactComponent) children: QueryList<NguiReactComponent>;
 
  @Input('reactComponent') reactComponent: any;
  @Input('reactState')     reactState: any;
  @Input('reactProps')     reactProps: React.Attributes = {};

  element: HTMLElement; // this angular DOM element;
  reactElement: any;    // this react element from React.createElement()
  reactInstance: any;   // this react instance from React.render()

  parentNguiReact: any; // parent ngui-react Angular component

  constructor(elementRef: ElementRef) {
    this.element = elementRef.nativeElement;
  }

  //make it sure reactComponent is provided
  ngOnInit() {
    if(!this.reactComponent) { 
      throw new Error("Attribute `reactComponent` is required");
    }
  }

  // set parent of react component, and create react element
  ngAfterContentInit() { //ViewChildren and ContentChildren are now initialized

    //set parent, and collect children
    let children = [];
    this.children.forEach(nguiReactComp => {
      if (nguiReactComp !== this) { ///http://stackoverflow.com/questions/43034144
        nguiReactComp.parentNguiReact = this;
        children.push(nguiReactComp.reactElement);
      }
    })

    // create react component
    let comp: any  = this.reactComponent;
    let props: any = this.reactProps;
    props.key = 'key'+Math.round(Math.random()*(10**15));
    this.reactElement = React.createElement(comp, props, children);
  }

  ngAfterViewInit() {
    //console.log('>>> Rendering', this);
    setTimeout( () => {
      if (!this.parentNguiReact) { //if this is top-most ngui-react, render it
        let callback = () => {};
        this.reactInstance = ReactDOM.render(this.reactElement, this.element, callback);
        this.reactState && this.reactInstance.setState(this.reactState);
      }
    });
  }

}