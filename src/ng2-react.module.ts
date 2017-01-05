import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import { Ng2ReactDirective } from "./ng2-react.directive";

export { Ng2ReactDirective };

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [Ng2ReactDirective],
  exports: [Ng2ReactDirective]
})
export class Ng2ReactModule {}
