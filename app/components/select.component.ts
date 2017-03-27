import { Component, ViewChild } from '@angular/core';

import * as Select from 'react-select';
import 'react-select/dist/react-select.css';

let templateStr: string = `
  
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
  
`;

@Component({
  selector: 'react-select',
  template: templateStr
})
export class SelectComponent {
  templateStr = templateStr;

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

}
