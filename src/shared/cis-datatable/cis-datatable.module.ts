// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NGX library imports
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CisDatatableComponent } from './cis-datatable.component';

@NgModule({
  declarations: [
    CisDatatableComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
  ],
  exports: [CisDatatableComponent]
})
export class CisDatatableModule { }
