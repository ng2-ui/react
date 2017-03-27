import { Component, ViewChild } from '@angular/core';

import * as DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

let templateStr: string = `
  
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
  
`;

@Component({
  selector: 'day-picker',
  template: templateStr
})
export class DayPickerComponent {
  templateStr = templateStr;

  /**
   * React DayPicker
   */
  DayPicker: DayPicker = DayPicker;
  selectedDate: Date = new Date();
  @ViewChild('reactDayPicker') reactDayPicker: any;
  handleDayClick = (e, day) => {
    this.selectedDate = day;
  };
  dayPickerProps = {
    initialMonth: new Date(2016, 1),
    disabledDays: day => day.getDay() === 0,
    onDayClick: this.handleDayClick
  };

}
