# @ngui/react
Angular2 Directive For React Component

<a href="https://rawgit.com/ng2-ui/react/master/app/index.html">
    <img src="http://i.imgur.com/WBLIAQx.png" width="40%"  valign="top"/>
    <img src="http://i.imgur.com/3XyDZ0Z.png" width="40%" valign="top" />
    <img src="http://i.imgur.com/qp2ssAq.png" width="40%"  valign="top"/>
    <img src="http://i.imgur.com/AcYglNX.png" width="40%"  valign="top"/>
</a>

## With @ngui/react, we can do the following from Angular2;
    
   * pass read-only props to React component
   * call a function in React component
   * fire event in React componet
   * set state of React componet
   * or, more? Please log a [feature requirement](https://github.com/ng2-ui/react/issues)
   
## How Does It Work

  1. Angular renders `ngui-react` directive with the following;
    1. `reactComponent`, A React component to render. Let's call it as MyComp.
    1. `reactProps`, props for MyComp.
    1. `reactState`, the initial state to be used by MyComp
  2. `ngui-react` directive creates a React app component, that hosts MyComp
    * The react app component is created with three props from step 1
    * The react app component renders MyComp using `reactProps` and `reactState`
  3. In summary, a React component is rendered within a React app, which is created by `ngui-react` directive
    * The react app component is accessible as `reactAppInstance`
    * The instance of MyComp is accessible as `reactCompnentInstance`

### `this.state.xxx` in React props

  Many of React props are set with `this.state`. Setting state in React props is totally safe within React apps because a React app has its state. However when we define React props in angular app, we cannot define it as `this.state.xxx` because Angular does not have `this.state`. If we define props as `this.state`, Angular does not understand this. Only React app can understand `this.state`. 
  
  Thus, when we define `this.state.xxx` in Angular to pass as React props, we need to define it as a string `APPSTATE:xxx`. Then, it will be converted `this.state.xxx` in a React app. With `ng2-app`,  all `this.state.xxx` must be defined as string `APPSTATE:xxx` from Angular-side, and all `APPSTATE:xxx` string will be converted to `this.state.xxx` for proper React execution.
    
## Install

1. install @ngui/react

        $ npm install @ngui/react --save

2. import NguiReactModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { NguiReactModule } from '@ngui/react';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, NguiReactModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }


For full example, please check out `app` directory to see the example of;

  - `app.module.ts`
  -  and `app.component.ts`.

## Use it in your code

```
import { Component, ViewChild } from '@angular/core';
import { Hello } from "./react-components/hello";  // This is a react component

@Component({
  selector: 'my-app',
  template: `
    <fieldset>
      <legend>This is React Component</legend>
      <ngui-react 
        #hello="@ngui/react"
        [reactComponent]="Hello"
        [reactProps]="{name:'React props'}">
      </ngui-react>
    </fieldset>
    
    <!-- this.hello means the instance of NguiReactDirective -->
    <fieldset>
      <legend>This is Angular2 component</legend>
      <button (click)="this.hello.reactInstance.tick()">
        Update time by executing React instance function
      </button>
      <button (click)="this.hello.reactInstance.updateButton.click()">
        Update time by triggering React element event
      </button>
      <button (click)="this.hello.setState({date: newDate})">
        Update time by setting state of React instance
      </button>
    </fieldset>
```

## **ng2-ui** welcomes new members and contributors

This module is only improved and maintained by contributors like you.

As a contributor, it's NOT required to be skilled in Javascript nor Angular2. 
You are only to be open-minded and interested in helping others.
As a contributor, you do following;

  * Updating README.md
  * Improving code comments
  * Answering issues and building FAQ
  * Documentation
  * Translation

In result of your active contribution, you will be listed as a core contributor
on https://ng2-ui.github.io, and a member of ng2-ui too.

If you are interested in becoming a contributor and/or a member of ng-ui,
please send me email to `allenhwkim AT gmail.com` with your github id. 


## For Developers

### To start

    $ git clone https://github.com/ng2-ui/react.git
    $ cd react
    $ npm install
    $ npm start

