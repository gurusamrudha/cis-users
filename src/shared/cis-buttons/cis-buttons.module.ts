// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { CisButtonComponent } from './cis-button.component';
import { CisButtonStatePipe } from './cis-button-state.pipe';

@NgModule({
  declarations: [
    CisButtonComponent,
    CisButtonStatePipe
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [CisButtonComponent]
})
export class CisButtonsModule { }
