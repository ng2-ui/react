/// <reference types="react" />
import { ElementRef } from '@angular/core';
import * as React from 'react';
export declare class NguiReactDirective {
    element: HTMLElement;
    reactAppInstance: any;
    reactComponentInstance: any;
    reactChildren: any[];
    reactComponent: any;
    reactState: any;
    reactProps: React.Attributes;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    setState(state: any): void;
}
