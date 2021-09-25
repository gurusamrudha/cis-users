// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { CisButtonComponent } from './cis-button.component';



@NgModule({
  declarations: [
    CisButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [CisButtonComponent]
})
export class CisButtonsModule { }
