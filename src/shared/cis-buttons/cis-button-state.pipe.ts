import { Pipe, PipeTransform } from '@angular/core';
import { UIState } from './uistate.enum';

@Pipe({
  name: 'buttonState'
})
export class CisButtonStatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let state = '';
    switch (value) {
      case UIState.Primary:
        state = 'cux-button--primary';
        break;

      case UIState.Warning:
        state = 'cux-button--warning';
        break;

      case UIState.Danger:
        state = 'cux-button--danger';
        break;
    }
    return state;
  }
}
