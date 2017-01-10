import * as React from 'react';
import * as ReactDOM from 'react-dom';

export class Ng2ReactWrapperComponent extends React.Component {
  state: any = {};

  constructor(props) {
    super(props);
  }

  render() {
    return this.props['reactEl'];
  }
}

