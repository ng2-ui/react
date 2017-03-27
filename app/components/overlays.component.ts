import { Component, ViewChild } from '@angular/core';
import { Hello } from "./react-components/hello";


let templateStr: string = `
  
  <fieldset>
    <legend><h2>This is React Hello Component</h2></legend>
    <ngui-utils-1>
      <ngui-react 
        #reactHello="ngui-react"
        [reactComponent]="Hello"
        [reactProps]="{name:'React props'}"></ngui-react>
      <hr/>
      <button (click)="this.reactHello.reactInstance.tick()">Update time by executing React instance function</button>
      <button (click)="this.reactHello.reactInstance.updateButton.click()">Update time by triggering React element event</button>
      <button (click)="this.reactHello.reactInstance.setState({date: newDate})">Update time by setting state of React instance</button>
    </ngui-utils-1>
    <pre>{{templateStr | htmlCode:'ngui-utils-1'}}</pre>
  </fieldset>
  
`;

@Component({
  selector: 'my-app',
  template: templateStr,
  styles: [`fieldset{ margin: 20px; border-radius: 10px}`]
})
export class OverlayersComponent {
  templateStr = templateStr;

  /**
   * React Hello
   */
  Hello: Hello = Hello;
  @ViewChild('reactHello') reactHello: any;
  newDate: Date = new Date(1969, 0, 1);

}
