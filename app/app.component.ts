import { Component, ViewChild } from '@angular/core';
import { Hello } from "./react-components/hello";

import * as DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import * as Select from 'react-select';
import 'react-select/dist/react-select.css';

import ChromePicker from 'react-color';

import * as ReactHighcharts from 'react-highcharts';

let templateStr: string = `
 <h2>This is Angular App Component</h2>
 
  With ng2-react, we can do the following from Angular2;
  <ul>
    <li> pass read-only props to React component</li>
    <li> call a function in React component </li>
    <li> fire event in React componet</li>
    <li> set state of React componet</li>
    <li> or, more? Please ask at https://github.com/ng2-ui/ng2-react/issues</li>
  </ul>
  
  <fieldset>
    <legend><h2>This is React Hello Component</h2></legend>
    <ng2-utils-1>
      <ng2-react 
        #hello="ng2-react"
        [reactComponent]="Hello"
        [reactProps]="{name:'React props'}"></ng2-react>
      <hr/>
      <button (click)="this.hello.reactComponentInstance.tick()">Update time by executing React instance function</button>
      <button (click)="this.hello.reactComponentInstance.updateButton.click()">Update time by triggering React element event</button>
      <button (click)="this.hello.reactComponentInstance.setState({date: newDate})">Update time by setting state of React instance</button>
    </ng2-utils-1>
    <pre>{{templateStr | htmlCode:'ng2-utils-1'}}</pre>
  </fieldset>
  
  <fieldset>
    <legend><h2>This is React Day Picker Component</h2></legend>
    https://github.com/gpbl/react-day-picker<br/>
    <ng2-utils-2>
      <ng2-react style="display:inline-block"
        #dayPicker="ng2-react"
        [reactComponent]="DayPicker"
        [reactProps]="dayPickerProps"></ng2-react>
      <br/>  
      <hr/>
      selected day: {{selectedDate}}        
    </ng2-utils-2>
    <pre>{{templateStr | htmlCode:'ng2-utils-2'}}</pre>
    dayPickerProps:
    <pre>{{dayPickerProps | json}}</pre>
  </fieldset>
  
  <fieldset>
    <legend><h2>This is React Selector Component</h2></legend>
    https://github.com/JedWatson/react-select<br/>
    <ng2-utils-3>
      <ng2-react style="display:block;width:500px"
        #select="ng2-react"
        [reactComponent]="Select"
        [reactProps]="selectProps"
        [reactState]="{val: ['one', 'two', 'three']}"></ng2-react>
      <br/>  
      <hr/>
      selected value: {{selectedValue | json}}        
    </ng2-utils-3>
    <pre>{{templateStr | htmlCode:'ng2-utils-3'}}</pre>
    selectProps:
    <pre>{{selectProps | json}}</pre>
  </fieldset>
  
  <fieldset>
    <legend><h2>This is React Color Picker Component</h2></legend>
    http://casesandberg.github.io/react-color/<br/>
    <ng2-utils-4>
    <ng2-react style="display:block" [style.backgroundColor]="backgroundColor"
      #color="ng2-react"
      [reactComponent]="ChromePicker"
      [reactProps]="colorProps"></ng2-react>
      <hr/>
      selected value: {{backgroundColor | json}}
    </ng2-utils-4>
    <pre>{{templateStr | htmlCode:'ng2-utils-4'}}</pre>
    colorProps:
    <pre>{{colorProps.onChange | jsCode}}</pre>
  </fieldset>
  
  <fieldset>
    <legend><h2>This is React Highcharts Component</h2></legend>
    http://kirjs.github.io/react-highcharts/<br/>
    <ng2-utils-5>
    <ng2-react
      #highcharts="ng2-react"
      [reactComponent]="ReactHighcharts"
      [reactProps]="highchartsProps"></ng2-react>
    </ng2-utils-5>
    <pre>{{templateStr | htmlCode:'ng2-utils-5'}}</pre>
    highchartsProps:
    <pre>{{highchartsProps.onChange | json}}</pre>
  </fieldset>
`;

@Component({
  selector: 'my-app',
  template: templateStr,
  styles: [`fieldset{ margin: 20px; border-radius: 10px}`]
})
export class AppComponent {
  templateStr = templateStr;

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
    this.select.reactAppInstance.setState({val: val});
  };
  selectProps = {
    name: "my-select",
    value: "APPSTATE:val",
    multi: true,
    options: [
      {value: 'one', label: 'One'},   {value: 'two', label: 'Two'},   {value: 'three', label: 'Three'},
      {value: 'four', label: 'Four'}, {value: 'five', label: 'Five'}, {value: 'six', label: 'Six'}
    ],
    onChange: this.handleChange
  };

  /**
   * React Color
   */
  ChromePicker: ChromePicker = ChromePicker;
  @ViewChild('color') color;
  backgroundColor: string = '#fff';
  handleChange = (color) => {
    this.backgroundColor = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
  };
  colorProps = {
    onChange: this.handleChange
  };

  /**
   * React Highcharts
   */
  ReactHighcharts: ReactHighcharts = ReactHighcharts;
  @ViewChild('highcharts') highcharts;
  highchartsProps = {
    config: {
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
      }]
    }
  };
}
