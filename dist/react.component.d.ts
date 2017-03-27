/// <reference types="react" />
import { ElementRef, QueryList } from '@angular/core';
import * as React from 'react';
export declare class NguiReactComponent {
    children: QueryList<NguiReactComponent>;
    reactComponent: any;
    reactState: any;
    reactProps: React.Attributes;
    element: HTMLElement;
    reactElement: any;
    reactInstance: any;
    parentNguiReact: any;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
}
