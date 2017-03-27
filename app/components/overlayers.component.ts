import { Component, ViewChild } from '@angular/core';

let templateStr: string = `
  
  <fieldset>
    <legend><h2>TODO: React Overlayers Component</h2></legend>
    <ngui-utils-1>
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
}
