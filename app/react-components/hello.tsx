import * as React from "react";

interface HelloProps {
  name: string;
}

export class Hello extends React.Component<HelloProps, {}> {
  state: any = {date: new Date()};
  updateButton: HTMLElement;

  render() {
    return (
      <div>
        <h3>Hello, {this.props.name}</h3>
        <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
        <button
          ref={el => this.updateButton = el}
          onClick={this.tick}>Update time using onClick</button>
      </div>
    );
  }

  tick = () => {
    this.setState({ date: new Date() });
  }
}
