import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { NguiReactDirective } from "./react.directive";

export { NguiReactDirective };

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [NguiReactDirective],
  exports: [NguiReactDirective]
})
export class NguiReactModule {}
