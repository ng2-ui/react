import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { NguiReactComponent } from "./react.component";

export { NguiReactComponent };

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [NguiReactComponent],
  exports: [NguiReactComponent]
})
export class NguiReactModule {}
