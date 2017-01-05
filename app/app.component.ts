import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div ng2-tab> <!-- this makes all tab  possible -->
    <div class="tabs">
      <div index="html">HTML</div>
      <div index="js">Javascript</div>
    </div>
    <div class="tab-contents">
      <div contents="html">HTML {{foo}} </div>
      <div contents="js">Javascript {{bar}} </div>
    </div>
  </div>
  
  <br/><br/>
  <h4> Tab with animation </h4>
  <ng2-tab
    selected="js"
    selected-index-class="selected"
    selected-contents-class="fadeIn animated">
    <div class="tabs">
      <div index="html">HTML</div>
      <div index="js">Javascript</div>
    </div>
    <div class="tab-contents">
      <div contents="html">HTML {{1}}</div>
      <div contents="js">Javascript {{1}}</div>
    </div>
  </ng2-tab>
  `
})
export class AppComponent {
  foo = 'foo';
  bar = 'bar';
}
