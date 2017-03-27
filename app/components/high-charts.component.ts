import { Component, ViewChild } from '@angular/core';

import * as ReactHighcharts from 'react-highcharts';

let templateStr: string = `
  
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
  selector: 'highcharts',
  template: templateStr
})
export class HighChartsComponent {
  templateStr = templateStr;

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
