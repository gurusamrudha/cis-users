import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cis-button',
  templateUrl: './cis-button.component.html'
})
export class CisButtonComponent  {

  @Input()
  disabled = false;

}
