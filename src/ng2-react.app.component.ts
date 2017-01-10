import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Ng2ReactAppComponent extends React.Component {
  //TODO: this need to be refactored
  // to use state to
  // 1. instantiae this instance with rendering a blank element
  // 2. when state is changed to have reactComponent
  //   2.1 change props to use state if REACT_APP_STATE is given
  // 3. render reactComponent instead
  state: any = {};
  reactComponent: any;
  reactComponentProps: any;
  reactComponentInstance: any;

  constructor(props) {
    super(props);
    this.state = this.props['state'];
    this.reactComponent  = this.props['comp'];
    this.reactComponentProps = this.props['props'];
    this.reactComponentProps.ref = ref => {this.reactComponentInstance = ref};
  }

  render() {
    let comp = this.reactComponent;
    let props = this.reactComponentProps;
    return React.createElement(comp, props);
  }

}

