# @ngui/react
Angular2 Directive For React Component

## IMPORTANT NOTICE

After 0.3.0 or higher, `ng2-react` has been changed to `@ngui/react`. Here are the changes;

* Module `ng2-react` is changed to `@ngui/react`.
* Direvtive `ng2-react` is changed to `ngui-react`.
* Class name `Ng2React` is changed to `NguiReact`.

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

  1. Angular renders `ngui-react` component with the following attributes;

    * `reactComponent`, A React component to render. Let's call it as MyComp.
    * `reactProps`, react props for the React component, MyComp.
    * `reactState`, the initial state to be used by MyComp

  2. `ngui-react` create and render React component using; 

    * `React.createElement()`
    * `React.render()`

## Access ReactJS properties
  You can access react element and instance from Angular component.

  * reactElement:  the react element from React.createElement()
  * reactInstance: the react instance from React.render()


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

## Example Usage

#### hello.ts
```
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
```
#### my-app.ts
```
import { Component, ViewChild } from '@angular/core';
import { Hello } from "./hello";  // This is a react component

@Component({
  selector: 'my-app',
  template: `
    <ngui-react 
      [reactComponent]="Hello"
      [reactProps]="{name:'angular2 react wrapper'}">
    </ngui-react>
  `;
  ...
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

