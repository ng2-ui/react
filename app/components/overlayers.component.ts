import { Component, ViewChild } from '@angular/core';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

let templateStr = `
  <fieldset>
    <legend><h2>TODO: React Overlayers Component</h2></legend>
    <ngui-utils-1>
      <ngui-react [reactComponent]="Map" [reactProps]="mapProps">
        <ngui-react [reactComponent]="Layers">
          <ngui-react [reactComponent]="layer.Tile">
          </ngui-react>
        </ngui-react>
      </ngui-react>
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
  layer: any = layer;
  Map: any = Map;
  Layers: any = Layers;

  mapProps = {
    view: { center: [0,0], zoom: 2 }
  }
}
