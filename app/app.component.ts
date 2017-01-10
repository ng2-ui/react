import { Component, ViewChild } from '@angular/core';
import { Hello } from "./react-components/hello";

import * as DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import * as Select from 'react-select';
import 'react-select/dist/react-select.css';

@Component({
  selector: 'my-app',
  template: `
    <h3>With ng2-react, we can do the following from Angular2; </h3>
    <ul>
      <li> pass read-only props to React component</li>
      <li> call a function in React component </li>
      <li> fire event in React componet</li>
      <li> set state of React componet</li>
      <li> or, more? Please ask at https://github.com/ng2-ui/ng2-react/issues</li>
    </ul>
    
    <fieldset>
      <legend>This is React Hello Component</legend>
      <ng2-react 
        #hello="ng2-react"
        [reactComponent]="Hello"
        [reactProps]="{name:'React props'}"></ng2-react>
      <hr/>
      <button (click)="this.hello.reactInstance.tick()">Update time by executing React instance function</button>
      <button (click)="this.hello.reactInstance.updateButton.click()">Update time by triggering React element event</button>
      <button (click)="this.hello.reactInstance.setState({date: newDate})">Update time by setting state of React instance</button>
    </fieldset>
    
    <fieldset>
      <legend>This is React Day Picker Component</legend>
      <ng2-react style="display:inline-block"
        #dayPicker="ng2-react"
        [reactComponent]="DayPicker"
        [reactProps]="dayPickerProps"></ng2-react>
      <br/>  
      <hr/>
      selected day: {{selectedDate}}        
    </fieldset>
    
    <fieldset>
      <legend>This is React Selector Component</legend>
      <ng2-react style="display:block;width:200px"
        #select="ng2-react"
        [reactComponent]="Select"
        [reactProps]="selectProps"></ng2-react>
      <br/>  
      <hr/>
      selected value: {{selectedValue | json}}        
    </fieldset>
    `
})
export class AppComponent {

  /**
   * React Hello
   */
  Hello: Hello = Hello;
  @ViewChild('hello') hello: any;
  newDate: Date = new Date(1969, 0, 1);

  /**
   * React DayPicker
   */
  DayPicker: DayPicker = DayPicker;
  selectedDate: Date = new Date();
  @ViewChild('dayPicker') dayPicker: any;
  handleDayClick = (e, day) => {
    this.selectedDate = day;
  };
  dayPickerProps = {
    initialMonth: new Date(2016, 1),
    disabledDays: day => day.getDay() === 0,
    onDayClick: this.handleDayClick
  };

  /**
   * React Selector
   */
  Select: Select = Select;
  @ViewChild('select') select;
  selectedValue: any;
  handleChange = (val) => {
    this.selectedValue = val;
    this.select.reactWrapperInstance.setState({val: val});
  };
  selectProps = {
    name: "my-select",
    // value: "this.state.val", //how do I set this in delayed pattern
    value: "this.select.reactWrapperInstance.state.val",
    options: [ { value: 'one', label: 'One' }, { value: 'two', label: 'Two' } ],
    onChange: this.handleChange
  };
}
