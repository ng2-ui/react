// polyfills, comment the following out for debugging purpose
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'reflect-metadata';

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from "@angular/forms";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent }   from './app.component';

//noinspection TypeScriptCheckImport
import { NguiReactModule }  from '@ngui/react';
import { NguiUtilsModule } from "@ngui/utils";

import { APP_ROUTER_PROVIDERS, APP_ROUTER_COMPONENTS } from './app.route';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NguiReactModule,
    NguiUtilsModule,
    APP_ROUTER_PROVIDERS,
  ],
  declarations: [AppComponent, APP_ROUTER_COMPONENTS],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
