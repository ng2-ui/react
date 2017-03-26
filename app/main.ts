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

import { AppComponent }   from './app.component';

//noinspection TypeScriptCheckImport
import { NguiReactModule }  from '@ngui/react';
import { NguiUtilsModule } from "@ngui/utils";

@NgModule({
  imports: [BrowserModule, FormsModule, NguiReactModule, NguiUtilsModule],
  declarations: [AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
