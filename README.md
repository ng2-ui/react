# ng2-react
Angular2 Directive For React Component

--------- THE BELOW IS NOT IMPLEMENTED YET -----------

<a href="https://rawgit.com/ng2-ui/ng2-react/master/app/index.html">
  Demo
</a>

## Install

1. install ng2-react

        $ npm install ng2-react --save

2. import Ng2ReactModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import { Ng2ReactModule } from 'ng2-react';
        
        @NgModule({
          imports: [BrowserModule, FormsModule, Ng2ReactModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }


For full example, please check out `app` directory to see the example of;

  - `app.module.ts`
  -  and `app.component.ts`.

## Use it in your code

    <ng2-react></ng2-react>
    <input ng2-react />

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

    $ git clone https://github.com/ng2-ui/ng2-react.git
    $ cd ng2-react
    $ npm install
    $ npm start

