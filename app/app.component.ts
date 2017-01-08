import { Component, ViewChild } from '@angular/core';
import { Hello } from "./react-components/hello";

@Component({
  selector: 'my-app',
  template: `
    <fieldset>
      <legend>This is React Component</legend>
      <ng2-react 
        #hello="ng2-react"
        [reactComponent]="reactComponents.Hello"
        [reactProps]="{name:'React props'}"></ng2-react>
    </fieldset>
    <fieldset>
      <legend>This is Angular2 component</legend>
      <button (click)="this.hello.reactInstance.tick()">Update time by executing React instance function</button>
      <button (click)="this.hello.reactInstance.updateButton.click()">Update time by triggering React element event</button>
      <button (click)="this.hello.setState({date: newDate})">Update time by setting state of React instance</button>
    </fieldset>
    
    <h3>With ng2-react, we can do the following from Angular2; </h3>
    <ul>
      <li> pass read-only props to React component</li>
      <li> call a function in React component </li>
      <li> fire event in React componet</li>
      <li> set state of React componet</li>
      <li> or, more? Please ask at https://github.com/ng2-ui/ng2-react/issues</li>
    </ul>
    `
})
export class AppComponent {
  reactComponents: any = { Hello: Hello }
  @ViewChild('hello') hello: any;
  newDate: Date = new Date(1969, 0, 1);
}
