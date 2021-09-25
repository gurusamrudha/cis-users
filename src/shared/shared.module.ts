// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared module imports
import { CisDatatableModule } from './cis-datatable/cis-datatable.module';
import { CisButtonsModule } from './cis-buttons/cis-buttons.module';

const modules = [
  CisDatatableModule,
  CisButtonsModule
];


@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [...modules]
})
export class SharedModule { }
