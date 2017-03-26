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
  [key: string]: any
}

export class NguiReactAppComponent extends React.Component<AppProps, AppState> {
  state: AppState = {};
  reactComponent: any;
  reactComponentProps: any;
  reactComponentInstance: any;

  constructor(props: AppProps) {
    super(props);
    this.state = this.props['state'];
    this.reactComponent  = this.props['comp'];
    this.reactComponentProps = this.props['props'];
    this.reactComponentProps.ref = ref => {this.reactComponentInstance = ref};
  }

  render() {
    let comp = this.reactComponent;
    let props: any = this.getAppStateProps(this.reactComponentProps);
    return React.createElement(comp, props);
  }

  /**
   * I could not set `this.state.xxx` as a prop from Angular-side simply because there is no `this.state`
   * so, all `this.state.xxx` will be defined as  string `APPSTATE:xxx` from Angular-side
   * this APPSTATE:xxx string should be converted to `this.state.xxx` for proper React execution
   * However, you cannot simply assign this.state[xxx] because it will copy by value of this.state[xxx]
   * so, I needed to create a function to return this.state.xxx without copying a value but just an expression
   * then copy/pasted all other properties, then return the props
   */
  getAppStateProps(props) {
    let ret = {};

    let allKeys = Object.keys(props);
    let appStateKeys = allKeys.filter( k => {
      return typeof props[k] === 'string' && props[k].startsWith('APPSTATE:')
    });
    let otherKeys = allKeys.filter( k => appStateKeys.indexOf(k) === -1);
    // console.log('allKeys', allKeys, 'appStateKeys', appStateKeys, 'otherKeys', otherKeys);

    let appStateProps = {};
    appStateKeys.forEach(k => appStateProps[k] = props[k]);
    let appStateJsonProps = JSON.stringify(appStateProps);

    let retVal = appStateJsonProps.replace(
      /\"APPSTATE:([^"]+)"/,
      function(m, $1) {return `this.state.${$1}`;}
    );
    let fn = Function('return' + retVal).bind(this);

    ret = fn();
    otherKeys.forEach(k => ret[k] = props[k]);
    return ret;
  }
}

