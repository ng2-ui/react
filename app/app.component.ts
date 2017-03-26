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
 
  With @ngui/react, we can do the following from Angular2;
  <ul>
    <li> pass read-only props to React component</li>
    <li> call a function in React component </li>
    <li> fire event in React componet</li>
    <li> set state of React componet</li>
    <li> or, more? Please ask at https://github.com/ng2-ui/react/issues</li>
  </ul>
  
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
  
  <fieldset>
    <legend><h2>This is React Day Picker Component</h2></legend>
    https://github.com/gpbl/react-day-picker<br/>
    <ngui-utils-2>
      <ngui-react style="display:inline-block"
        #reactDayPicker="ngui-react"
        [reactComponent]="DayPicker"
        [reactProps]="dayPickerProps"></ngui-react>
      <br/>  
      <hr/>
      selected day: {{selectedDate}}        
    </ngui-utils-2>
    <pre>{{templateStr | htmlCode:'ngui-utils-2'}}</pre>
    dayPickerProps:
    <pre>{{dayPickerProps | jsCode}}</pre>
  </fieldset>
  
  <fieldset>
    <legend><h2>This is React Selector Component</h2></legend>
    https://github.com/JedWatson/react-select<br/>
    <ngui-utils-3>
      <ngui-react style="display:block;width:500px"
        #reactSelect="ngui-react"
        [reactComponent]="Select"
        [reactProps]="selectProps"
        [reactState]="{val: ['one', 'two', 'three']}"></ngui-react>
      <br/>  
      <hr/>
      selected value: {{selectedValue | json}}        
    </ngui-utils-3>
    <pre>{{templateStr | htmlCode:'ngui-utils-3'}}</pre>
    selectProps:
    <pre>{{selectProps | jsCode}}</pre>
  </fieldset>
  
  <fieldset>
    <legend><h2>This is React Color Picker Component</h2></legend>
    http://casesandberg.github.io/react-color/<br/>
    <ngui-utils-4>
    <ngui-react style="display:block" [style.backgroundColor]="backgroundColor"
      #reactColor="ngui-react"
      [reactComponent]="ChromePicker"
      [reactProps]="colorProps"></ngui-react>
      <hr/>
      selected value: {{backgroundColor | json}}
    </ngui-utils-4>
    <pre>{{templateStr | htmlCode:'ngui-utils-4'}}</pre>
    colorProps:
    <pre>{{colorProps.onChange | jsCode}}</pre>
  </fieldset>
  
  <fieldset>
    <legend><h2>This is React Highcharts Component</h2></legend>
    http://kirjs.github.io/react-highcharts/<br/>
    <ngui-utils-5>
    <ngui-react
      #reactHighcharts="ngui-react"
      [reactComponent]="ReactHighcharts"
      [reactProps]="highchartsProps"></ngui-react>
    </ngui-utils-5>
    <pre>{{templateStr | htmlCode:'ngui-utils-5'}}</pre>
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
  @ViewChild('reactHello') reactHello: any;
  newDate: Date = new Date(1969, 0, 1);

  /**
   * React DayPicker
   */
  DayPicker: DayPicker = DayPicker;
  selectedDate: Date = new Date();
  @ViewChild('reactDayPicker') reactDayPicker: any;
  handleDayClick = (e, day) => {
    console.log('selected a date', day, e);
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
  @ViewChild('reactSelect') reactSelect;
  selectedValue: any;
  handleSelectChange = (val) => {
    this.selectedValue = val;
    this.reactSelect.reactInstance.closeMenu();
  };
  selectState = {val: ['one', 'two', 'three']};
  selectProps = {
    name: "my-select",
    value: this.selectState.val,
    multi: true,
    options: [
      {value: 'one', label: 'One'},   {value: 'two', label: 'Two'},   {value: 'three', label: 'Three'},
      {value: 'four', label: 'Four'}, {value: 'five', label: 'Five'}, {value: 'six', label: 'Six'}
    ],
    onChange: this.handleSelectChange
  };

  /**
   * React Color
   */
  ChromePicker: ChromePicker = ChromePicker;
  @ViewChild('reactColor') reactColor;
  backgroundColor: string = '#fff';
  handleColorChange = (color) => {
    this.backgroundColor = `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`;
  };
  colorProps = {
    onChange: this.handleColorChange
  };

  /**
   * React Highcharts
   */
  ReactHighcharts: ReactHighcharts = ReactHighcharts;
  @ViewChild('reactHighcharts') reactHighcharts;
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
