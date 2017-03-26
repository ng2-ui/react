/// <reference types="react" />
import * as React from 'react';
/**
 * Many of React props are set with `this.state`, In that case Angular does not understand this
 * but only an React app can. So, before we render React component, include the React component
 * into a React application, so that React can use state.
 * Without this wrapper app React `this.state` is simply not possible IMO
 */
export interface AppProps {
    state: any;
    comp: any;
    props: any;
}
export interface AppState {
    [key: string]: any;
}
export declare class NguiReactAppComponent extends React.Component<AppProps, AppState> {
    state: AppState;
    reactComponent: any;
    reactComponentProps: any;
    reactComponentInstance: any;
    constructor(props: AppProps);
    render(): React.ComponentElement<any, React.Component<any, React.ComponentState>>;
    /**
     * I could not set `this.state.xxx` as a prop from Angular-side simply because there is no `this.state`
     * so, all `this.state.xxx` will be defined as  string `APPSTATE:xxx` from Angular-side
     * this APPSTATE:xxx string should be converted to `this.state.xxx` for proper React execution
     * However, you cannot simply assign this.state[xxx] because it will copy by value of this.state[xxx]
     * so, I needed to create a function to return this.state.xxx without copying a value but just an expression
     * then copy/pasted all other properties, then return the props
     */
    getAppStateProps(props: any): {};
}
