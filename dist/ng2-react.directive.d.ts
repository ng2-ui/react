/// <reference types="react" />
import { ElementRef } from '@angular/core';
import * as React from 'react';
export declare class Ng2ReactDirective {
    element: HTMLElement;
    reactInstance: any;
    reactChildren: any[];
    reactComponent: any;
    reactProps: React.Attributes;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    setState(props: any): void;
}
