// Angular imports
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

// NGX library imports
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-cis-datatable',
  templateUrl: './cis-datatable.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CisDatatableComponent  {
  @ViewChild(DatatableComponent) table: DatatableComponent;

  /** Behavior to use when selecting rows: 'none', 'single', 'multi', 'checkbox' */
  @Input()
  selectionType = 'single';

  /** The set of entities appearing on the current page */
  @Input()
  rowData = [];

  /** Column definition for the table */
  @Input()
  columnData = [];

  /** Boolean value to select or deselect row programatically */
  @Input()
  set resetTable(resetTable: boolean) {
    if (resetTable) {
      this.reset();
    }
  }

  /** Horizontal Scroll bar for not overlapping on mobile device */
  @Input()
  horizontalScrollBar = false;

  /** Emits the single-selected entity when one is selected or deselcted. */
  @Output()
  rowClick = new EventEmitter<any>();

  selectedRows = [];

  /**
   * @param $event of type any comes from the library which gives the events on selection and deselction
   */
  onActivate($event): void {
    if ($event.type === 'click') {
      this.rowClick.emit($event.row);
    }
  }

  reset(): void {
    this.selectedRows = [];
  }
}

