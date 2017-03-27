import { Component, ViewChild } from '@angular/core';
import ChromePicker from 'react-color';

let templateStr: string = `
  
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
  
`;

@Component({
  selector: 'color-picker',
  template: templateStr
})
export class ColorPickerComponent {
  templateStr = templateStr;

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

}
