import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cis-button',
  templateUrl: './cis-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CisButtonComponent  {

  /** value to disable button */
  @Input()
  disabled = false;

  /** String value to set the state of the button. Default it would be of Cyan state. */
  @Input()
  state = '';

}
